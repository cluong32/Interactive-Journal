from rest_framework import generics
from .models import EntryModel
from .serializers import EntrySerializer
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response


class EntryListCreateView(generics.ListCreateAPIView):
    queryset = EntryModel.objects.all()
    serializer_class = EntrySerializer


class EntryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = EntryModel.objects.all()
    serializer_class = EntrySerializer


@api_view(["POST"])
@permission_classes([AllowAny])
def login_view(request):
    username = request.data.get("username")
    password = request.data.get("password")

    user = authenticate(username=username, password=password)

    if user is None:
        return Response({"error": "Invalid username or password"}, status=400)
    
    login(request, user)

    return Response({"message": "Logged in"})


@api_view(["POST"])
def logout_view(request):
    logout(request)
    return Response({"message": "Logged out"})


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def current_user_view(request):
    return Response({
        "id": request.user.id,
        "username": request.user.username,
        "email": request.user.email,
    })