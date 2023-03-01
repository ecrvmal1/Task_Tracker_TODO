# Generated by Django 3.2.8 on 2023-02-14 17:47

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('TODO', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='note_author',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='todo',
            name='note_project',
            field=models.OneToOneField(default=0, on_delete=django.db.models.deletion.CASCADE, to='TODO.project'),
        ),
        migrations.AddField(
            model_name='project',
            name='project_users',
            field=models.ManyToManyField(to=settings.AUTH_USER_MODEL),
        ),
    ]