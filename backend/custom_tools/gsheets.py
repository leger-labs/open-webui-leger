from fastapi import APIRouter
from pydantic import BaseModel
import time
import random
import json

# aggregates tool
from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
import os.path
import pickle
import re
import os


# Initialize the Sheets API
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

router = APIRouter()

class GSheetRequestBody(BaseModel):
    some_field: str  # Define the expected fields and their types

def authenticate_sheets_api():
    """Authenticate and return the Google Sheets API service."""
    creds = None
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            directory = os.path.dirname(os.path.abspath(__file__))
            creds_path = os.path.join(directory, 'credentials.json')
            flow = InstalledAppFlow.from_client_secrets_file(creds_path, SCOPES)
            creds = flow.run_local_server(port=0)
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)
    return build('sheets', 'v4', credentials=creds)

def addAggregateColumn(spreadsheetId, sheet_name, column_name, formula, sheet_range):
    service = authenticate_sheets_api()
    
    # Determine the next available column in the sheet
    result = service.spreadsheets().values().get(spreadsheetId=spreadsheetId, range=sheet_range).execute()
    values = result.get('values', [])
    
    if not values:
        print('No data found.')
        return
    
    num_rows = len(values)
    next_column_index = len(values[0])  # Assuming the first row has the max number of columns
    next_column_letter = chr(ord('A') + next_column_index)
    
    # Prepare the new column header and formulas
    new_column_values = [[column_name]]
    
    # Function to increment numbers in cell references
    def increment_formula(formula, increment):
        # Increment numeric parts of cell references (preceded by a letter) found in the formula
        return re.sub(r'([A-Z])(\d+)', lambda x: f"{x.group(1)}{str(int(x.group(2)) + increment)}", formula)

    current_formula = formula
    for i in range(1, num_rows):
        new_formula = increment_formula(current_formula, 1)
        new_column_values.append([f'={new_formula}'])
        current_formula = new_formula  # Update current formula for the next iteration
    
    # Update the sheet with the new column
    body = {'values': new_column_values}
    update_range = f'{sheet_name}!{next_column_letter}1:{next_column_letter}{len(new_column_values)}'
    result = service.spreadsheets().values().update(spreadsheetId=spreadsheetId, range=update_range,
                                                     valueInputOption='USER_ENTERED', body=body).execute()
    print(f'Updated range: {result.get("updatedRange")}')

@router.post("/execute")
async def execute_gsheets(body: GSheetRequestBody):
    SPREADSHEET_ID = '1NXDeMZJ9PR2zHVx4k-Zt0wrU4MxbLBUpVtvWzkqq1fY'
    SHEET_NAME = 'Sheet1'  # Replace with your actual sheet name
    RANGE_NAME = SHEET_NAME  # Assuming the whole sheet; adjust if necessary

    # Example usage
    addAggregateColumn(SPREADSHEET_ID, SHEET_NAME, "High-Low Range", "C1-D1", RANGE_NAME)
    addAggregateColumn(SPREADSHEET_ID, SHEET_NAME, "Change in Close (%)", 'IFERROR((100 * (E1-E0)/E0), "N/A")', RANGE_NAME)

    #=====OUTPUT====#

    # Pre-determined string to output
    phrase = "The desired changes are attached and can now be seen"
    model_id = "orca-mini:latest"

    # Split the phrase into tokens. Here, each word is considered a token.
    tokens = phrase.split()

    # Base template for the output
    output_template = '{{"model":"{model_id}","created_at":"{time_stamp}","message":{{"role":"assistant","content":"{token}"}},"done":{done}}}'

    # Current time, to simulate a starting point
    start_time = time.time()

    for i, token in enumerate(tokens):
        # Simulate a random delay between 0.1 and 0.5 seconds
        time.sleep(random.uniform(0.1, 0.5))
        
        # Calculate the current time stamp
        time_stamp = time.strftime('%Y-%m-%dT%H:%M:%S.%f', time.gmtime(start_time + random.uniform(0.1, 0.5)))
        
        # Truncate the microseconds to the required precision
        time_stamp = time_stamp[:-3] + "Z"
        
        # Check if this is the last token
        done = "false" if i < len(tokens) - 1 else "true"
    
    outputstr = output_template.format(model_id=model_id, time_stamp=time_stamp, token=token, done=done)

    # return as JSON response
    return json.loads(outputstr)
