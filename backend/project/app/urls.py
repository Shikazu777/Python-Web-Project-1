from django.urls import path
from app import views

urlpatterns = [
    path("",views.index,name='index'),
    path("login",views.login,name="login")
]

# ""=="/"=="localhost"==http://127.0.0.0:8000/