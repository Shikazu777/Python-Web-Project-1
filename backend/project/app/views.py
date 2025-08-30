from django.shortcuts import render,HttpResponse
import pandas as pd
from .models import Applicant,Connection,Status

# Create your views here.
def index(request):
    return render(request,'index.html')

def login(request):
    return render(request,'login.html')

def uploaddata(request):
    filepath='FILENAME.csv'
    df=pd.read_csv(filepath,encoding='latin-1')

    for index,row in df.iterrows():
        #create or update done dulipcate it pls
        applicant,created = Applicant.objects.get_or_create(
        Applicant_Name=row['Applicant_Name'] ,
        Gender=row['Gender'],
        District=row['District'],
        State=row['State'],
        Pincode=row['Pincode'],
        Ownership=['Ownership'],
        GovtID_Type=row['GovtID_Type'],
        ID_Number=['ID_Number'],
        Category=row['Category']
  )


#create or get status object

    


    return HttpResponse("File data is uploaded or updated")