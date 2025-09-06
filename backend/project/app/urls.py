from django.urls import path
from app import views

urlpatterns = [
    path("",views.index,name="index"),
    path("login",views.login,name="login"),
    path("uploaddata",views.uploaddata,name="uploaddata"),
    path("getApplicationsData/")
]

# ""=="/"=="localhost"==http://127.0.0.0:8000/

from django.urls import path
from . import views

urlpatterns = [
    path('api/applicants/', views.applicant_list, name='applicant_list'),
    path('api/applicants/<int:pk>/edit/', views.edit_applicant, name='edit_applicant'),
]
