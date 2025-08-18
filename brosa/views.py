from django.shortcuts import render


# Home view renders the main page of the application.
def index_view(request):
    context = {}
    return render(request, 'brosa/index.html', context)
