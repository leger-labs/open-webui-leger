from googleapiclient.discovery import build
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from google_auth_oauthlib import flow
import os
import os.path
import pickle

# If modifying these SCOPES, delete the file token.pickle.
SCOPES = ['https://www.googleapis.com/auth/spreadsheets']

def hello_world(spreadsheet_id):
    """Shows basic usage of the Sheets API.
    Writes values to a sample spreadsheet.
    """
    creds = None
    # The file token.pickle stores the user's access and refresh tokens, and is
    # created automatically when the authorization flow completes for the first
    # time.
    if os.path.exists('token.pickle'):
        with open('token.pickle', 'rb') as token:
            creds = pickle.load(token)
    # If there are no (valid) credentials available, let the user log in.
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # Save the credentials for the next run
        with open('token.pickle', 'wb') as token:
            pickle.dump(creds, token)

    service = build('sheets', 'v4', credentials=creds)

    # The A1 notation of the values to update.
    range_name = 'Sheet1!H15'  # Example assumes 'Sheet1' as the sheet name.

    # How the input data should be interpreted.
    value_input_option = 'RAW'

    # How the input data should be inserted.
    insert_data_option = 'INSERT_ROWS'

    value_range_body = {
        "values": [
            ["Hello, World!"]  # This is the content that will be written to the cell.
        ]
    }

    request = service.spreadsheets().values().update(spreadsheetId=spreadsheet_id, range=range_name,
                                                      valueInputOption=value_input_option, body=value_range_body)
    response = request.execute()

    print(response)

if __name__ == "__main__":
    SAMPLE_SPREADSHEET_ID = "1NXDeMZJ9PR2zHVx4k-Zt0wrU4MxbLBUpVtvWzkqq1fY"
    hello_world(SAMPLE_SPREADSHEET_ID)