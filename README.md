# Bobyard Comments Application

This repository contains a full-stack comment system with:

- **Backend:** Django + Django REST Framework + PostgreSQL (or SQLite for local testing)
- **Frontend:** React + Tailwind CSS

---

## Prerequisites

- Python 3.11+
- Node.js 18+ and npm 10+
- (Optional) PostgreSQL for production; SQLite works out-of-the-box.

---

## Setup Instructions

### Backend (Django)

1. Open a terminal in the `backend/` folder:

```cd backend```

2. Create and activate a virtual environment:

```python -m venv venv```

# Windows PowerShell
```venv\Scripts\Activate.ps1```

# Windows CMD
```venv\Scripts\activate.bat```

# macOS / Linux
```source venv/bin/activate```

3. Install dependencies:

```pip install -r requirements.txt```

4. Apply database migrations:

```python manage.py makemigrations```
```python manage.py migrate```

5. Import initial comments:

```python manage.py import_comments path/to/comments.json```

6. Start the backend server:

```python manage.py runserver```

The API will be available at http://127.0.0.1:8000/api/comments/.

### Frontend (React)
1. Open a terminal in the frontend/ folder:

```cd frontend```

2. Install dependencies:

```npm install```

3. Start the development server:

```npm start```

The React app will be available at http://localhost:3000.
It communicates with the Django backend API by default at http://127.0.0.1:8000/api.

### Project Structure:
Bobyard/
├── backend/                 # Django backend
│   ├── comments/            # Django app
│   ├── manage.py
│   └── requirements.txt
├── frontend/                # React frontend
│   ├── public/
│   └── src/
├── .gitignore
└── README.md

### API Endpoints
API Endpoints
Method	URL	                Description
GET	    /api/comments/	    List all comments
POST	/api/comments/	    Create a new comment
PATCH	/api/comments/{id}/	Edit an existing comment
DELETE	/api/comments/{id}/	Delete a comment

### Note
All frontend components are in frontend/src/, backend logic in backend/comments/.

### Justin Li
