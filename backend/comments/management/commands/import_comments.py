import json
from django.core.management.base import BaseCommand
from django.utils.dateparse import parse_datetime
from comments.models import Comment

class Command(BaseCommand):
    help = 'Import comments from JSON file'

    def add_arguments(self, parser):
        parser.add_argument('json_file', type=str)

    def handle(self, *args, **options):
        path = options['json_file']
        with open(path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        for c in data.get('comments', []):
            cid = c.get('id')
            Comment.objects.update_or_create(
                id=cid,
                defaults={
                    'author': c.get('author', ''),
                    'text': c.get('text', ''),
                    'date': parse_datetime(c.get('date')),
                    'likes': c.get('likes', 0),
                    'image': c.get('image', ''),
                }
            )
        self.stdout.write(self.style.SUCCESS('Imported comments'))
