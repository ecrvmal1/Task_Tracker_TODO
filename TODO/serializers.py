from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from users.models import Users
from .models import Project, TODO


class ProjectModelSerializer(ModelSerializer):
    project_users = serializers.StringRelatedField(many=True)

    class Meta:
        model = Project
        fields = '__all__'


class TODOModelSerializer(ModelSerializer):
    note_author = serializers.StringRelatedField()
    note_project = serializers.StringRelatedField()

    class Meta:
        model = TODO
        fields = '__all__'
