from django.shortcuts import render
from .models import Project

def home(request):
    projects = Project.objects.all()
    return render(request, 'home.html', {'projects': projects})


def page_not_found(request, exception):
    return render(request, '404.html', status=404)