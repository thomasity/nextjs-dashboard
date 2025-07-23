# Planetary Route Planning Based on Coordinate and ID Mapping

This C++ project loads planetary coordinate and naming data from input files, organizes them using structured data types, and provides tools for analyzing or planning movement between planets. It’s a Freshman-year software project in file I/O, struct usage, and spatial reasoning.

## Features

- Loads planetary location data from a file (row, column, symbol, ID)
- Loads planet name associations by ID
- Uses structs and vectors to store, map, and organize information
- Intended to support route planning logic across a grid-based planetary map

## Technologies

- C++
- Standard I/O, file streams, vector-based data structures

## Usage

1. Prepare input files for planet locations and planet names.
2. Compile the program:
   ```bash
   g++ planRoute.cpp -o planRoute
