# Generated by Django 3.2.8 on 2023-02-14 18:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('TODO', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='note_active',
            field=models.BooleanField(default=True),
        ),
    ]