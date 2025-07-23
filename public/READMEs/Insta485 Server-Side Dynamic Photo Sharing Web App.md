# Insta485 Server-Side Dynamic Photo Sharing Web App

This project is a fully functional photo-sharing web application inspired by Instagram, built with a Python backend and server-side HTML rendering. It includes user authentication, dynamic user profiles, post creation and deletion, follower/following systems, and more. The app uses Jinja templates, URL routing, and a SQLite-backed model layer.

## Features

- Dynamic user profiles and post feeds
- User login/logout, account creation, and password management
- Post upload, deletion, and timeline updates
- Follower and following relationship logic
- Template rendering with Jinja
- Organized routing with modular view files
- Database interaction using a model abstraction layer

## Technologies

- Python 3
- Flask-style structure (modular `views/`)
- Jinja2 for templating
- SQLite for storage

## Usage

1. Install dependencies (if any):
   ```bash
   pip install -r requirements.txt
   ```
2. Set environment variables (if required) and run the app:
   ```bash
   flask --app insta485 run
   ```
3. Visit [http://localhost:5000](http://localhost:5000) in your browser.

## Directory Structure

```
insta485/views/      # Python files for handling user routes
insta485/templates/  # Jinja2 templates for rendering HTML
insta485/uploads/    # User-uploaded media
insta485/model.py    # Database interactions
sql/                 # SQL schema and seed data
bin/                 # Deployment or startup scripts
```