from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
import os.path
import pickle

# Initialize the Sheets API
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

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
            flow = InstalledAppFlow.from_client_secrets_file('credentials.json', SCOPES)
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

    # if formula is 'C1-D1', should be 'C1-D1', 'C2-D2', 'C3-D3', ...
    if formula:
        print(formula)
        for i in range(1, num_rows + 1):
            new_column_values.append([formula.replace('1', str(i))])
    
    # Update the sheet with the new column
    body = {'values': new_column_values}
    update_range = f'{sheet_name}!{next_column_letter}1:{next_column_letter}{num_rows}'
    result = service.spreadsheets().values().update(spreadsheetId=spreadsheetId, range=update_range,
                                                     valueInputOption='USER_ENTERED', body=body).execute()
    print(f'Updated range: {result.get("updatedRange")}')


SPREADSHEET_ID = '1NXDeMZJ9PR2zHVx4k-Zt0wrU4MxbLBUpVtvWzkqq1fY'
SHEET_NAME = 'Sheet1'  # Replace with your actual sheet name
RANGE_NAME = SHEET_NAME  # Assuming the whole sheet; adjust if necessary

# Example usage
addAggregateColumn(SPREADSHEET_ID, SHEET_NAME, "High-Low Range", "C1-D1", RANGE_NAME)