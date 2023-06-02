from curses.ascii import HT
from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse, JsonResponse 
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view
from .models import AppUser as User
from .models import Sighting
import requests


def send_the_homepage(request):
    print('home!')
    theIndex = open('static/index.html').read()
    return HttpResponse(theIndex)

@api_view(['POST'])
def sign_up(request):
    try:
        User.objects.create_user(username=request.data['email'], password = request.data['password'], email = request.data['email'])
    except Exception as e:
        print('oops!')
        print(str(e))
        return JsonResponse({'success': False})
    return JsonResponse({'success': True})

@api_view(['POST'])
def log_in(request):

    email = request.data['email']
    password = request.data['password']
    
    user = authenticate(username=email, password=password)
    if user is not None:
        if user.is_active:
            try:
                login(request, user)
            except Exception as e:
                print('oops!')
                print(str(e))
            return JsonResponse({'success': True})
        else:
            return HttpResponse('not active!')
            # Return a 'disabled account' error message
    else:
        return JsonResponse({'success': False})
        # Return an 'invalid login' error message.

@api_view(['POST'])
def log_out(request):
    logout(request)
    return HttpResponse('Logged you out!')

@api_view(['GET'])
def who_am_i(request):
    if request.user.is_authenticated:
        data = serializers.serialize("json", [request.user], fields=['email', 'username'])
        return HttpResponse(data)
    else:
        return JsonResponse({'user' : None})

@api_view(['POST'])
def log_bird(request):
    user = User.objects.get(email = request.user.email)
    print('this should be request.user.sighting:', user.sighting.all())
    body = request.data
    newBird = Sighting(title=body["title"], description=body["description"], lat=body["lat"], long=body["long"], user = request.user)
    newBird.save()
    return HttpResponse('You have added a bird')

def list_sighting(request):
    user = User.objects.get(email = request.user.email)
    
    user_sightings = user.sighting.all()

    user_sightings_json = serializers.serialize('json', user_sightings)

    return HttpResponse(user_sightings_json)

@api_view(['GET'])
def weather_api(request, longitude, latitude):
    print("this is so fun")

    API_response = requests.get(f'https://api.openweathermap.org/data/2.5/weather?lat={latitude}&lon={longitude}&apikey=64ed653d7b00e46d38f6b8f287f11aa8')

    responseJSON = API_response.json()

    print(responseJSON)

    return JsonResponse(responseJSON)

