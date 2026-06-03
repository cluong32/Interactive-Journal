from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class EntryModel(models.Model):
    MOOD_CHOICES = [
        ("happy", "Happy"),
        ("neutral", "Neutral"),
        ("sad", "Sad"),
        ("angry", "Angry"),
        ("fear", "Fear"),
        ("disgust", "Disgust"),
        ("surprise", "Surprise")
    ]

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="entries"
    )

    title = models.CharField(max_length=200)
    content = models.JSONField()
    mood = models.CharField(
        max_length=20,
        choices=MOOD_CHOICES,
        blank=True,
        null=True
    )
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    

class EntryImage(models.Model):
    entry = models.ForeignKey(
        EntryModel,
        on_delete=models.CASCADE,
        related_name="images",
        null=True,
        blank=True
    )

    image = models.ImageField(upload_to='entry_images/')
    uploaded_at = models.DateTimeField(auto_now_add=True)