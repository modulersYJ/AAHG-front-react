#rest

from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from AAHG_server_django.utils.about import get_utils_about

def get_views_about(request):
    return JsonResponse(data= get_utils_about())