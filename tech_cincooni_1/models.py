from django.db import models

class Signup_details(models.Model):
    fullname=models.CharField(max_length=200)
    email=models.CharField(max_length=200)
    username=models.CharField(max_length=200)
    password=models.CharField(max_length=200)