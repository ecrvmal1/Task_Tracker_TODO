from django_filters import rest_framework as filters
from .models import TODO


class TODOFilter(filters.FilterSet):
    name = filters.CharFilter(Lookup_expr='contains')

    class Meta:
        model = TODO
        fields = ['note_project']
