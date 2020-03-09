from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500, blank=True) # blank: optional
    created_at = models.DateTimeField(auto_now_add=True) # auto_now_add: automatically add