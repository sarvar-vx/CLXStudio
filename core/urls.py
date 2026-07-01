from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('vincenzo-cassano/', admin.site.urls),
    path('', include('pages.urls')),
]

handler404 = 'pages.views.page_not_found'