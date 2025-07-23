# Generic Doubly-Linked List with Iterator Interface in C++

This project implements a custom doubly-linked, double-ended list in C++ using templates. The list includes full iterator support and methods for accessing, inserting, and removing elements at both ends. It is built as a lightweight version of `std::list`, suitable for use in introductory data structures courses.

## Features

- `List.h`: Implements a templated `List<T>` class with:
  - `empty()`, `size()`, `front()`, `back()`
  - Doubly-linked node structure
  - Iterator support for element traversal
- `List_tests.cpp`: A suite of test cases for verifying the correctness of list operations

## Technologies

- C++ Templates
- Custom memory management (pointers)
- Assertion-based test design

## Usage

1. Include `List.h` in your project.
2. Build and run tests using:
   ```bash
   g++ -std=c++11 List_tests.cpp -o list_tests
   ./list_tests
