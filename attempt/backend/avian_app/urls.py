from django.urls import path
from . import views

urlpatterns = [
    path('', views.send_the_homepage),
    path('signup', views.sign_up),
    path('login', views.log_in),
    path('logout', views.log_out),
    path('whoAmI', views.who_am_i),
    path('logBird', views.log_bird),
    path('listSighting', views.list_sighting),
    path('API/<int:longitude>/<int:latitude>', views.weather_api)
]