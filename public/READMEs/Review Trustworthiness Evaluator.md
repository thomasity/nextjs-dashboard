# Review Trustworthiness Evaluator

This C++ project evaluates customer reviews from a data file and determines whether they are likely to be truthful or not based on average score thresholds. It serves as a simple tool for analyzing review datasets, often used in consumer analytics or e-commerce platforms.

## Features

- Reads a file containing customer reviews
- Calculates average scores
- Applies a threshold to determine if a review is likely "truthful"
- Outputs categorized evaluations

## Technologies

- C++11
- File I/O and basic data analysis

## Usage

1. Compile the code using:
   ```bash
   g++ --std=c++11 evaluateReviews.cpp reviews.cpp -o evaluateReviews
