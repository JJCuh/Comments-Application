from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import Comment
from .serializers import CommentSerializer
from django.utils import timezone
import uuid

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all().order_by('date')
    serializer_class = CommentSerializer

    # override create to support Admin default author and current time
    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        data.setdefault('author', 'Admin')
        if 'date' not in data or not data['date']:
            data['date'] = timezone.now().isoformat()
        data.setdefault('id', str(uuid.uuid4()))
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

