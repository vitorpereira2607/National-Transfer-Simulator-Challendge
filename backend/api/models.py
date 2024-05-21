from django.db import models

# Create your models here.

class NationalTransfer(models.Model):
    originAccount = models.CharField(max_length=12)
    iban = models.CharField(max_length=34)
    description = models.CharField(max_length=254)
    amount = models.FloatField()
    published_date = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f"{self.originAccount}, {self.iban}, {self.description}, {self.amount}"

