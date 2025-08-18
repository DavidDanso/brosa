import os
import sys
import django
from django.core.wsgi import get_wsgi_application

# Add project to path
sys.path.insert(0, os.path.dirname(__file__))

# Set Django settings
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'a_core.settings')

django.setup()
application = get_wsgi_application()