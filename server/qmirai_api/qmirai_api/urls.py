from django.urls import path
from .views import TextProcessingView

urlpatterns = [
    path('process_text/', TextProcessingView.as_view()),
]