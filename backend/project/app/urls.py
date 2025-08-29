from django.urls import path

urlpatterns = [
    path("",views.indes,name='index'),
    path("/login",views.login,name="login")
]

# ""=="/"=="localhost"==http://127.0.0.0:8000/