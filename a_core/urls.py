from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from brosa.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index_view, name='home'),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# Change Site Title, Index Title and Site Title
admin.site.site_header = "Brosa Vault Panel"
admin.site.site_title = "Brosa Vault Panel"
admin.site.index_title = "Welcome to Brosa Vault Panel"