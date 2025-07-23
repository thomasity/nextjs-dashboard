# Insta485 Client-Side Dynamic Photo App (React + API + SQLite)

This project implements the client-side frontend of a photo-sharing web application using React. It renders user posts dynamically using RESTful API calls to a Python backend connected to a SQLite database. All data (posts, likes, comments, etc.) are fetched from the backend and displayed using React components, allowing for a modern, fast, and responsive user experience.

## Features

- `main.jsx`: Entry point that renders the React app to the DOM
- `posts.jsx`: Loads metadata from `/api/v1/posts/` and renders a timeline of posts
- `post.jsx`: Displays post details (image, likes, comments, timestamp)
- Uses `fetch()` to dynamically load data via JSON from REST endpoints
- Interacts with a SQLite-backed backend (via Flask-style API)
- Built with Webpack and Babel for bundling and JSX transpilation

## Technologies

- React (JavaScript, JSX)
- RESTful API (Python backend)
- SQLite for persistent storage
- Webpack and Babel for frontend build

## Usage

1. Make sure the backend server is running and serves API routes under `/api/v1/...`.

2. Install frontend dependencies and build the frontend bundle:
   ```bash
   npm install
   npm run build
   ```
3. Serve the site (using the backend), and visit: http://localhost:5000
