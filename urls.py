from django.urls import path
from .views import contract_list

urlpatterns = [
    path('contracts/', contract_list, name='contract_list'),
]
