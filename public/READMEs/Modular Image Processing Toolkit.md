# Modular Image Processing Toolkit in C++

This project implements a collection of image processing tools in C++ using a custom `Image` data structure. It includes support for resizing, rotating, and manipulating images at the pixel level. Designed for educational purposes, the project demonstrates modular design and testing practices using separate test suites.

## Features

- `processing.cpp`: Functions for rotating and processing image data
- `resize.cpp`: Functions for resizing images
- `Image.cpp`, `Matrix.cpp`: Core data structures to hold image pixels and 2D matrices
- `*_tests.cpp`: Standalone unit tests for each module

## Technologies

- C++ (manual memory management, pointers, structs)
- No external image libraries — all data is handled via custom classes
- File and matrix-level manipulation

## Usage

1. Compile using:
   ```bash
   g++ -std=c++11 Image.cpp Matrix.cpp processing.cpp resize.cpp -o imageTool
