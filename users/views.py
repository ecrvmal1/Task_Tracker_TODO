from django.shortcuts import render

from rest_framework.renderers import JSONRenderer
from rest_framework.viewsets import ModelViewSet
from rest_framework import mixins
from .models import Users
from .serializers import UsersModelSerializer
from rest_framework import viewsets


class UsersCustomViewSet(
    mixins.ListModelMixin, mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin, viewsets.GenericViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersModelSerializer
