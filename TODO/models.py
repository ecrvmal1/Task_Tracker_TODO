from django.db import models
from users.models import Users


# Create your models here.
class Project(models.Model):
    project_name = models.CharField(max_length=64, unique=True, blank=False)
    project_users = models.ManyToManyField(Users)
    project_link = models.PositiveIntegerField()
    project_date_created = models.DateField(auto_created=True)
    project_url = models.URLField(blank=True)

    def __str__(self):
        return self.project_name


class TODO(models.Model):
    note_text = models.CharField(max_length=256)
    note_author = models.OneToOneField(Users, on_delete=models.CASCADE)
    note_daytime_created = models.DateTimeField(auto_created=True)
    note_active = models.BooleanField(default=False)
    note_project = models.OneToOneField(Project, default=0, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.note_text[20::]}'
