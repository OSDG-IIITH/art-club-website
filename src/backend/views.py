from django.shortcuts import render
from .models import Event
from .serializers import EventSerializer
from rest_framework import generics

class EventListCreate(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

# Create your views here.
