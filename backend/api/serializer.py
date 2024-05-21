from rest_framework import serializers
from .models import *
from schwifty import IBAN
from schwifty.exceptions import SchwiftyException, InvalidCountryCode

class NationalTransferSerializer(serializers.ModelSerializer):

    amount_usd = serializers.SerializerMethodField()
    
    class Meta:
        model = NationalTransfer
        fields = ['id', 'originAccount', 'iban', 'description', 'amount', 'amount_usd']

    def validate_originAccount(self, value):
        if ' ' in value:
            raise serializers.ValidationError('Invalid Account number. It should not contain spaces.')
        if len(value) != 12:
            raise serializers.ValidationError('Invalid Account number. It must contain exacly 12 digits.')  
        if not value.isdigit():
            raise serializers.ValidationError('Invalid Account number. It must contain only digits.')
        return value
    
    def validate_amount(self, value):
        if value <= 0:
            raise serializers.ValidationError('Amount must be a positive number.')
        return value
    
    def validate_iban(self, value):
        try:
            value = IBAN(value)
        except(SchwiftyException, InvalidCountryCode) as e:
            raise serializers.ValidationError(f'{str(e)}', )
        return value
    
    def validate_description(self, value):
        max_length = 254
        if len(value) > max_length:
            raise serializers.ValidationError(f'Description should not exceed maximum {max_length} characters')
        return value
    
    def get_amount_usd(self, obj):
        return obj.amount * 1.2
    
