from django_filters import rest_framework as filters
from TODO.models import TODO, Project


class TODOFilter(filters.FilterSet):
    # if need to search subsctring then below: ' contains'
    # note_project = filters.CharFilter(lookup_expr='contains')

    # if need to search for the entire field, then class Meta below
    class Meta:
        model = TODO
        fields = ['note_project']


class ProjectFilter(filters.FilterSet):
    # if need to search subsctring then below: ' contains'
    project_name = filters.CharFilter(lookup_expr='contains')

    # if need to search for the entire field, then class Meta below
    class Meta:
        model = Project
        fields = ['project_name']
