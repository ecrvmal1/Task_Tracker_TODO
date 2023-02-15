from django.db import models
from django.contrib.auth.models import AbstractUser, PermissionsMixin


# Create your models here.

# class Users(models.Model):
#     first_name = models.CharField(max_length=64)
#     last_name = models.CharField(max_length=64)
#     Birthday_year = models.PositiveIntegerField()


class Users(AbstractUser):
    username = None
    first_name = models.CharField('first name', max_length=64, blank=False)
    last_name = models.CharField('last name', max_length=64, blank=False)
    birthday_year = models.PositiveIntegerField()
    email = models.EmailField('email', blank=False, unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'birthday_year', ]

    def __str__(self) -> str:
        return f'({self.first_name} {self.last_name} )'
        # return ['first_name', 'last_name']
