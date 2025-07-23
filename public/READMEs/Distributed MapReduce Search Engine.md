# Distributed MapReduce Search Engine in Python

This project implements a simplified distributed search engine. It uses MapReduce for indexing HTML documents into an inverted index and serves user queries through a Flask-based web interface that contacts segmented index servers. The engine is designed for scalability, with parallel mappers, reducers, and multi-threaded search result aggregation.

## Features

- `inverted_index/`: Implements MapReduce pipeline for building an inverted index from HTML input
  - `map*.py`: Parse and tokenize documents
  - `reduce*.py`: Combine word-to-document mappings
  - `partition.py`, `pipeline.sh`: Coordinate partitioning and execution
- `index_server/`: Hosts segmented inverted indexes for query responses
- `search_server/search/`: Flask web app for handling search queries
  - Dynamically fetches from multiple index segments using multithreading
- `templates/index.html`: User-facing interface for entering search terms
- Query parameters supported: keyword and optional weight (`w`)

## Technologies

- Python 3
- Flask
- Multithreading
- HTML parsing and indexing
- HTTP/REST for segment communication

## Usage

1. Run MapReduce indexer:
   ```bash
   ./mapreduce/pipeline.sh
   ```

2. Start one or more index servers:
   ```bash
   python3 -m index_server.index
   ```

3. Start the search server:
   ```bash
   python3 -m search_server.search
   ```

4. Visit [http://localhost:5000](http://localhost:5000) and enter a search query.