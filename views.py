from django.shortcuts import render
from .models import SmartContract

def contract_list(request):
    contracts = SmartContract.objects.all()
    return render(request, 'smartcontracts/contract_list.html', {'contracts': contracts})
