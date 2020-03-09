from rest_framework import serializers
from projects.models import Project

# Project Serializers  # turning the Project model into a serializer
class ProjectSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Project
        fields = ('__all__')