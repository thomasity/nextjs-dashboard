# Insta485 Static Site Generator

This project implements a static site generator for a simplified Instagram-style website. It uses Python, Jinja2 templates, and a configuration file to render HTML pages from templates and JSON content. The tool allows easy customization and generation of a complete static photo-sharing website.

## Features

- `insta485generator`: CLI utility for rendering static sites from template and config inputs
- `insta485/templates/`: Jinja2 HTML templates for pages such as index, user profiles, and posts
- `insta485/static/`: Static CSS and image assets
- `config.json`: Defines metadata such as users and image paths
- Modular rendering pipeline with `click` CLI interface
- Outputs fully navigable HTML site

## Technologies

- Python 3
- Jinja2 (templating)
- Click (command-line interface)
- JSON configuration

## Usage

1. Install dependencies:
   ```bash
   pip install jinja2 click
   ```

2. Build the static site:
   ```bash
   python -m insta485generator --input insta485 --output html
   ```

3. Open the `html/index.html` file in your browser to view the result.