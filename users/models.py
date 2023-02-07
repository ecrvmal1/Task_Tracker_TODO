from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin


# Create your models here.

# class Users(models.Model):
#     first_name = models.CharField(max_length=64)
#     last_name = models.CharField(max_length=64)
#     Birthday_year = models.PositiveIntegerField()


class Users(AbstractUser):
    first_name = models.CharField('first name', max_length=64, blank=False)
    last_name = models.CharField('last name', max_length=64, blank=False)
    birthday_year = models.PositiveIntegerField()
    email_address = models.EmailField('email address', blank=False, unique=True)
    REQUIRED_FIELDS = ['first_name', 'last_name', 'birthday_year', 'email_address',
                       ]
