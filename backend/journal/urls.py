from django.urls import path
from .views import (
    EntryListCreateView,
    EntryDetailView,
    login_view,
    logout_view,
    current_user_view
)


urlpatterns = [
    path(
        "entries/",
        EntryListCreateView.as_view()
    ),

    path(
        "entries/<int:pk>/",
        EntryDetailView.as_view()
    ),

    path("auth/login/", login_view),
    path("auth/logout/", logout_view),
    path("auth/me/", current_user_view),
]