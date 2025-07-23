# Optimal Braking Coefficient Calculator Using Binary Search and Euler's Method

This C++ project calculates the optimal braking coefficient needed to bring a vehicle (e.g., an aircraft) to a stop within a specified runway length. It uses a binary search algorithm combined with Euler's method to iteratively simulate deceleration and determine the minimum braking coefficient required to meet stopping constraints.

## Features

- Prompts user for:
  - Initial velocity (`v0`)
  - Atmospheric drag coefficient (`c_d`)
  - Runway length
- Uses a binary search strategy to estimate the optimal braking coefficient (`b`)
- Applies Euler's method to simulate position and velocity during deceleration
- Adjustable tolerance for result accuracy

## Technologies

- Written in C++
- No external libraries — only standard I/O and math

## Usage

1. Compile the program:
   ```bash
   g++ brakeCoef.cpp -o brakeCoef
