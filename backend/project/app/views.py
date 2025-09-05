from django.shortcuts import render,HttpResponse
import pandas as pd
from .models import Applicant,Connection,Status
from datetime import datetime   # ✅ missing import

# Create your views here.
def index(request):
    return render(request,'index.html')

def login(request):
    return render(request,'login.html')

def uploaddata(request):
    try:
        filepath='customers_100.csv'
        df=pd.read_csv(filepath,encoding='latin-1')

        for index,row in df.iterrows():
            # create or update applicant
            applicant ,created = Applicant.objects.get_or_create(
                 Applicant_Name=row['Applicant_Name'],
                 Gender=row['Gender'],
                 District=row['District'],
                 State=row['State'],
                 Pincode=row['Pincode'],
                 Ownership=row['Ownership'],       # ✅ fixed
                 GovtID_Type=row['GovtID_Type'],
                 ID_Number=row['ID_Number'],      # ✅ fixed
                 Category=row['Category']
            )

            # create or get status object
            status, created=Status.objects.get_or_create(Status_Name=row['Status'])

            Date_of_Application = datetime.strptime(row['Date_of_Application'], "%d-%m-%Y")
            Date_of_Application=Date_of_Application.strftime("%Y-%m-%d")

            Date_of_Approval = None   # ✅ make sure it always exists
            if (not pd.isna(row['Date_of_Approval'])):
                Date_of_Approval = datetime.strptime(row['Date_of_Approval'], "%d-%m-%Y")
                Date_of_Approval=Date_of_Approval.strftime("%Y-%m-%d")

            Modified_Date = datetime.strptime(row['Modified_Date'], "%d-%m-%Y")
            Modified_Date=Modified_Date.strftime("%Y-%m-%d")

            Connection.objects.get_or_create(
                 Applicant=applicant,
                 Load_Applied=row['Load_Applied'],
                 Date_of_Application=Date_of_Application,
                 Date_of_Approval=Date_of_Approval,
                 Modified_Date=Modified_Date,
                 Status=status,
                 Reviewer_ID=row['Reviewer_ID'],
                 Reviewer_Name=row['Reviewer_Name'],
                 Reviewer_Comments=row['Reviewer_Comments']
            )
            print(row['ID'])

           # ✅ moved outside loop

    except Exception as e:   # ✅ fixed "expect"
        return HttpResponse(f"Error: {e}")   # ✅ fixed multiple args issue
    
    return HttpResponse("File data is uploaded or updated")