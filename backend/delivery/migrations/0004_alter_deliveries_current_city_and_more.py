# Generated by Django 4.1.7 on 2023-04-21 22:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("delivery", "0003_deliveries_latitude_deliveries_longitude"),
    ]

    operations = [
        migrations.AlterField(
            model_name="deliveries",
            name="current_city",
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name="deliveries",
            name="current_state",
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name="users",
            name="answer_1",
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name="users",
            name="answer_2",
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name="users",
            name="security_question_1",
            field=models.CharField(max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name="users",
            name="security_question_2",
            field=models.CharField(max_length=500, null=True),
        ),
    ]