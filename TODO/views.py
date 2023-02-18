from django.shortcuts import render

from rest_framework.viewsets import ModelViewSet
from .models import Project, TODO
from .serializers import ProjectModelSerializer, TODOModelSerializer
from rest_framework import mixins
from rest_framework import viewsets
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.viewsets import ModelViewSet
from .filters import TODOFilter
from django_filters import rest_framework as filters


# class ProjectModelViewSet(ModelViewSet):
#     queryset = Project.objects.all()
#     serializer_class = ProjectModelSerializer

# https://www.django-rest-framework.org/api-guide/generic-views/#concrete-view-classes
# mixins.CreateModelMixin,  create-only endpoints
# mixins.ListModelMixin,   collection of model instances
# mixins.RetrieveModelMixin, single model instance
# mixins.DestroyModelMixin  single model instance.
# mixins.UpdateModelMixin single model instance.
#
# viewsets.GenericViewSet):


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class ProjectCustomViewSet(mixins.CreateModelMixin,
                           mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin,
                           mixins.UpdateModelMixin, viewsets.GenericViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    pagination_class = ProjectLimitOffsetPagination

    # make this filter works!
    def get_queryset(self):
        return Project.objects.filter(project_name__contains='Speech')


# class TODOModelViewSet(ModelViewSet):
#     queryset = TODO.objects.all()
#     serializer_class = TODOModelSerializer


class TODOLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class TODODjangoFilterViewSet(ModelViewSet):
    filterset_fields = ['project_name']


class TODOCustomViewSet(mixins.CreateModelMixin,
                        mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin,
                        mixins.UpdateModelMixin, viewsets.GenericViewSet):
    queryset = TODO.objects.all()
    serializer_class = TODOModelSerializer
    filterset_fields = ['note_project']

    # class Meta:
    #     model = TODO
    #     fields = ['project_name']

# class TODODjangoFilterViewSet(ModelViewSet):
#     queryset = TODO.objects.all()
#     serializer_class = TODOModelSerializer
#     filterset_fields = ['project_name']

# class # Check how to redefine delete  to mark as project "inactive"
