# Grover's Algorithm Simulation Using Qiskit

This project simulates Grover’s quantum search algorithm using the Qiskit framework. It builds phase oracles from CNF formulas, constructs Grover iterations with custom diffusers, and simulates the search over small variable spaces. This implementation is designed for educational use in quantum computing courses.

## Features

- `grover.py`: Core implementation of Grover’s algorithm, including diffuser and iteration logic
- `oracle.py`: Converts CNF expressions into quantum phase oracles
- `counter.py`: Creates a quantum binary counter circuit
- `driver.py`: Runs the full simulation with user-defined search criteria
- `tests_p2_algorithms.py` / `tests_p2_oracle.py`: Unit tests for Grover logic and oracle construction

## Technologies

- Python 3
- Qiskit (IBM Quantum)
- CNF parsing and circuit-based quantum logic

## Usage

1. Install Qiskit:
   ```bash
   pip install qiskit
   ```

2. Run the Grover driver:
   ```bash
   python driver.py
   ```

3. To test components:
   ```bash
   python tests_p2_algorithms.py
   python tests_p2_oracle.py
   ```