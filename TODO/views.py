from .models import Project, TODO
from .serializers import ProjectModelSerializer, TODOModelSerializer
from rest_framework import mixins, pagination
from rest_framework import viewsets

from .filters import TODOFilter, ProjectFilter
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


# class ProjectPagination(pagination.PageNumberPagination):
#     page_size = 2


class ProjectCustomViewSet(mixins.CreateModelMixin,
                           mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin,
                           mixins.UpdateModelMixin, viewsets.GenericViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    # pagination_class = ProjectPagination

    # фильтрацию по совпадению части названия проекта
    # def get_queryset(self):
    #     return Project.objects.filter(project_name__contains='Speech')
    filter_backends = (filters.DjangoFilterBackend,)  # или так
    # filterset_class = ProjectFilter


# class TODOPagination(pagination.PageNumberPagination):
#     pagination.PageNumberPagination.page_size = 4


class TODOCustomViewSet(mixins.CreateModelMixin,
                        mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin,
                        mixins.UpdateModelMixin, viewsets.GenericViewSet):
    queryset = TODO.objects.all()
    serializer_class = TODOModelSerializer
    # pagination_class = TODOPagination

    # filter_backends = (filters.DjangoFilterBackend,)  # или так
    # filterset_fields = ['note_project', ]

    # filter_backends = (filters.DjangoFilterBackend,)  # или так
    # filterset_class = TODOFilter
