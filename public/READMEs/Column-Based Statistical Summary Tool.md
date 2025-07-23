# Column-Based Statistical Summary Tool

This C++ project reads a CSV file and computes a summary of a numeric column selected by the user. It extracts the data, calculates frequencies of each value, and outputs a histogram-style summary. The project is structured to support testing and modular functionality.

## Features

- Reads a CSV file and prompts for a column name
- Extracts numerical data from the selected column
- Computes and displays the frequency of each unique value
- Includes testable logic for column extraction and data summarization

## Technologies

- C++11
- File I/O and CSV parsing
- Custom functions for data extraction and frequency summarization

## Usage

1. Compile using:
   ```bash
   g++ main.cpp stats.cpp -o statsTool
