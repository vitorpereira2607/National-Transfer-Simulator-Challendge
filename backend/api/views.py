from django.shortcuts import render
from rest_framework import generics, status
from .models import *
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import *

# Create your views here.

class NationalTransferView(generics.ListCreateAPIView):
    queryset = NationalTransfer.objects.all()
    serializer_class = NationalTransferSerializer

    def post(self, request, format=None):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            transfer = serializer.save()  

            amount_usd = transfer.amount * 1.09
            
            response_data = serializer.data
            response_data['amount_usd'] = amount_usd

            return Response(response_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class NationalTransferUpdateAndDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = NationalTransfer.objects.all()
    serializer_class = NationalTransferSerializer
    lookup_field = "pk"

    