# Document Similarity and Clustering Toolkit in Python

This Python project implements multiple document analysis techniques including K-Means clustering, Locality-Sensitive Hashing (LSH), and Local Outlier Factor (LOF) detection. It supports both cosine similarity and shingle-based (Jaccard) approaches to compare and group text documents.

## Features

- `Kmeans.py`: Performs k-means clustering on document vectors
- `lof.py`: Implements LOF to detect outliers in high-dimensional data
- `LSH_cosine.py`: Uses cosine-based LSH for efficient approximate nearest neighbor search
- `LSH_shingle.py`: Uses Jaccard-based LSH via k-shingles
- `naive_cosine.py` and `naive_shingle.py`: Brute-force baselines for cosine and Jaccard similarity

## Technologies

- Python 3
- NumPy
- Text preprocessing and vectorization
- MinHash and LSH techniques

## Usage

1. Prepare your text data in a file or format expected by each module
2. Run any algorithm:
   ```bash
   python Kmeans.py
   python LSH_cosine.py
   python lof.py
3. Each script will output results like cluster assignments, nearest neighbors, or outlier scores.