from django.contrib import admin

# Register your models here.

from .models import Course,Contact,Staff
admin.site.register(Course)
admin.site.register(Contact)
admin.site.register(Staff)
