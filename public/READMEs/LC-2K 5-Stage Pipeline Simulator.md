# LC-2K 5-Stage Pipeline Simulator in C

This project implements a cycle-accurate simulator for the 5-stage instruction pipeline of the LC-2K architecture, commonly used in educational computer architecture courses. It models the fetch, decode, execute, memory, and write-back stages with full support for data forwarding and control hazard resolution.

## Features

- Simulates the following LC-2K instructions:
  - `add`, `nor`, `lw`, `sw`, `beq`, `halt`, `noop`
- Implements full pipeline stages with register and memory state tracking
- Models data hazards and forwarding
- Handles control hazards via basic branch logic
- Prints processor state at each cycle

## Technologies

- C (ANSI C / C89)
- Struct-based pipeline register modeling
- Instruction decoding and execution simulation

## Usage

1. Compile:
   ```bash
   gcc -o simulator simulator.c
