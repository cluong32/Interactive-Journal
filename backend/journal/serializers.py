from rest_framework import serializers
from .models import EntryModel

class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = EntryModel

        fields = "__all__"