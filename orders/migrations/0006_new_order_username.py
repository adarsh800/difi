# Generated by Django 4.0.1 on 2022-01-19 16:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0005_new_order_date_new_order_new_order_order_details_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='new_order',
            name='username',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
