# LC-2K Cache Simulator in C

This project is a C-based simulator for cache memory behavior in the LC-2K architecture. It models read and write operations at the word level, simulating cache hits and misses with support for configurable block sizes, associativity, and replacement policies (e.g., LRU).

## Features

- Configurable:
  - Cache size
  - Block size
  - Associativity
- LRU (Least Recently Used) replacement policy
- Calculates number of bits needed for tag, index, and offset
- Interfaces with an external memory access function `mem_access()`
- Handles instruction fetches and cache updates with performance tracking

## Technologies

- ANSI C (C89)
- Bit manipulation, preprocessor macros
- Cache simulation and memory modeling

## Usage

1. Compile:
   ```bash
   gcc -o cache_sim cache.c
