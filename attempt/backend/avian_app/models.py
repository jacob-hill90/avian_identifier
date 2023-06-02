from django.db import models
from django.contrib.auth.models import AbstractUser

class AppUser(AbstractUser):
    email = models.EmailField(
        verbose_name='email',
        max_length=255,
        unique=True,
    )

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = [] 

class Sighting(models.Model):
    title = models.CharField(max_length=255 , blank = False)
    description = models.CharField(max_length=255)
    lat = models.IntegerField()
    long = models.IntegerField()
    user = models.ForeignKey(AppUser, on_delete = models.CASCADE, related_name='sighting')
