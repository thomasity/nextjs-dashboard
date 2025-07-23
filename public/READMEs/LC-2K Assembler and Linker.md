# LC-2K Assembler and Linker in C

This project implements a two-part assembler and linker for the LC-2K instruction set architecture, often used in educational settings to teach computer architecture. It processes LC-2K assembly files, translates them to machine code, and links multiple modules together by resolving external label references.

## Components

- `assembler.c`: Converts LC-2K assembly code to binary machine code using a two-pass strategy. It handles labels, opcodes, and immediate values, and emits object code for each instruction.
- `linker.c`: Processes multiple assembled object files, resolving label references across modules and combining them into a final executable format.

## Features

- Two-pass assembly logic for symbol definition and resolution
- Basic error handling and preprocessing
- Label definition and memory address calculation
- Linking logic to support modular programs

## Technologies

- C (C89/C90)
- File I/O and string parsing
- Instruction encoding

## Usage

1. Compile both modules:
   ```bash
   gcc -o assembler assembler.c
   gcc -o linker linker.c
