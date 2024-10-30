from django.db import models

class SmartContract(models.Model):
    name = models.CharField(max_length=255, default="Default Name")
    contract_address = models.CharField(max_length=42)  # Direcciones típicas de Ethereum
    created_at = models.DateTimeField(auto_now_add=True)
    is_active = models.BooleanField(default=True)
    code = models.TextField(default="N/A")  # Ajusta el valor por defecto según corresponda
  

    def __str__(self):
        return f"{self.name} - {self.contract_address}"
