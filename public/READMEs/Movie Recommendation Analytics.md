# Movie Recommendation Analytics Using Apache Spark

This project performs large-scale analysis of movie ratings and transactions using Apache Spark. It includes modules for generating frequent itemsets, mining association rules, identifying most-rated movies, and converting transaction formats. The project is designed to work with datasets like user-movie ratings and supports distributed processing for scalability.

## Features

- `FrequentItemsets.py`: Identifies frequently co-rated movies using Apriori-like logic
- `AssociationRules.py`: Derives association rules from frequent itemsets
- `MostRated.py`: Extracts and ranks the most rated movies
- `PopularMovies.py`: Highlights movies with the highest support in transactions
- `TransactionFormat.py`: Transforms raw input into Spark-compatible transaction format

## Technologies

- Python 3
- Apache Spark (PySpark)
- CSV/JSON-based data processing

## Usage

1. Ensure Apache Spark is installed and configured
2. Run any module as a PySpark job:
   ```bash
   spark-submit FrequentItemsets.py
   spark-submit AssociationRules.py
3. Output will be saved to .txt or JSON as defined in each script