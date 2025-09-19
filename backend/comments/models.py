from django.db import models

class Comment(models.Model):
    id = models.CharField(primary_key=True, max_length=64)
    author = models.CharField(max_length=200)
    text = models.TextField()
    date = models.DateTimeField()
    likes = models.IntegerField(default=0)
    image = models.URLField(blank=True)

    def __str__(self):
        return f"{self.author}: {self.text[:30]}"