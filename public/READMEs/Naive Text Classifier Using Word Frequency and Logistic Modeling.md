# Naive Text Classifier Using Word Frequency and Logistic Modeling

This C++ project implements a simple machine learning text classifier. It uses CSV input data consisting of labeled text (e.g., "tag" and "content") to train a model that classifies new, unseen posts. The system calculates probabilities using frequency analysis and basic logarithmic probability modeling, mimicking the behavior of a Naive Bayes classifier.

## Features

- `main.cpp`: Core classification logic using a `Classifier` class
- `csvstream.h`: Handles CSV file parsing for training and testing data
- Calculates word frequency per label and overall label probability
- Classifies new inputs based on maximum likelihood
- Includes debug mode to print detailed training insights

## Technologies

- C++11
- Standard Library (`map`, `set`, `fstream`, `cmath`)
- Custom CSV reader
- Binary search tree included (not used directly in classification logic)

## Usage

1. Compile the project:
   ```bash
   g++ -std=c++11 main.cpp -o classifier
