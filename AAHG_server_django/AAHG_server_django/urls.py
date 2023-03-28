from django.contrib import admin
from django.urls import path
from AAHG_server_django.views.about import get_views_about

urlpatterns = [
    path('about/', get_views_about),
]
