from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin


# Create your models here.

# class Users(models.Model):
#     first_name = models.CharField(max_length=64)
#     last_name = models.CharField(max_length=64)
#     Birthday_year = models.PositiveIntegerField()


class Users(AbstractUser):
    username = models.CharField('username', max_length=64, unique=True)
    first_name = models.CharField('first name', max_length=64, blank=True, unique=False)
    last_name = models.CharField('last name', max_length=64, blank=True, unique=False)
    birthday_year = models.PositiveIntegerField(blank=True, unique=False)
    email = models.EmailField('email', blank=True, unique=False)
    REQUIRED_FIELDS = ['first_name', 'last_name', 'email', 'birthday_year']

    def __str__(self) -> str:
        return f'{self.username}'
        # return ['first_name', 'last_name']

    USERNAME_FIELD = 'username'
