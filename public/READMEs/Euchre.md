# Euchre Game Simulation in C++

This project implements the classic trick-taking card game **Euchre** using C++. It includes full gameplay logic, card and player abstractions, and configurable gameplay via command-line input. Players are instantiated dynamically, and a Pack of cards is used for game rounds with optional shuffling.

## Features

- `Card.cpp`, `Pack.cpp`: Core classes representing individual cards and the deck
- `Player.cpp`: Handles player behavior, factory methods, and turn logic
- `euchre.cpp`: Main game loop — manages team play, scoring, dealer rotation, and upcard logic
- `*_tests.cpp`: Unit tests for verifying card logic and player behavior
- Supports command-line configuration for player types, shuffle settings, and target score

## Technologies

- C++11
- Standard Template Library (STL) features: `vector`, `fstream`, `assert`
- Modular object-oriented design

## Usage

1. Compile:
   ```bash
   g++ -std=c++11 euchre.cpp Pack.cpp Player.cpp Card.cpp -o euchre
