from django.db import models

class Event(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    venue = models.CharField(max_length=100)
    event_time = models.DateTimeField()
    image_link = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)

