# LC-2K Assembler and Simulator in C

This project provides an implementation of an assembler and simulator for the LC-2K instruction set architecture, commonly used in introductory computer architecture courses. It includes:

- `assembler.c`: Converts LC-2K assembly source code into 16-bit machine code.
- `simulator.c`: Simulates the execution of machine code for the LC-2K architecture.

The LC-2K architecture features a reduced instruction set with basic operations such as arithmetic, memory access, branching, and halt instructions.

## Features

- Parses assembly language (.asm) files and translates to binary machine code (.mc)
- Supports labels, branching, arithmetic, memory, and halt operations
- Runs compiled programs step-by-step with memory and register simulation
- Handles error checking and program halting

## Technologies

- ANSI C (C89/C90)
- File I/O and basic string parsing
- Simulation of a small RISC-style ISA

## Usage

1. Compile both files:
   ```bash
   gcc -o assembler assembler.c
   gcc -o simulator simulator.c
