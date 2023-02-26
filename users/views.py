from django.shortcuts import render

from rest_framework.renderers import JSONRenderer
from rest_framework.viewsets import ModelViewSet
from rest_framework import mixins
from .models import Users
from .serializers import UsersModelSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser, BasePermission


# mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin,
#                            mixins.UpdateModelMixin, viewsets.GenericViewSet)

# class UsersCustomViewSet(mixins.CreateModelMixin,
#                          mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin,
#                          mixins.UpdateModelMixin, viewsets.GenericViewSet):
#     queryset = Users.objects.all()
#     serializer_class = UsersModelSerializer


# class UsersCustomViewSet(viewsets.ModelViewSet):
#     queryset = Users.objects.all()
#     serializer_class = UsersModelSerializer

class UsersModelViewSet(ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersModelSerializer
