# Generated by Django 4.0.1 on 2022-01-17 17:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0003_alter_new_order_pincode_new_order'),
    ]

    operations = [
        migrations.RenameField(
            model_name='new_order',
            old_name='phone_number',
            new_name='phone_number_new_order',
        ),
    ]
