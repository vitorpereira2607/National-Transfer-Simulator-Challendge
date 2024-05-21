from django.urls import path
from . import views

urlpatterns = [
    path("national-transfer/", views.NationalTransferView.as_view(), name="national-transfer-view-create"),
    path("national-transfer/<int:pk>/", views.NationalTransferUpdateAndDestroyView.as_view(), name="national-transfer-view-update-delete") 
]