from django.db import models
class Post(models.Model):
    titile = models.CharField(max_length = 150)
    body = models.TextField()
    def __str__(self) :
        return  f"Post {self.titile}"
