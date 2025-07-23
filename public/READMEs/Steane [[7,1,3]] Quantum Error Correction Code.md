# Steane [[7,1,3]] Quantum Error Correction Code in Qiskit

This project implements the Steane [[7,1,3]] quantum error-correcting code using Qiskit. It provides functions to encode a logical qubit, simulate quantum noise (bit-flip or phase-flip errors), extract syndromes using ancilla qubits, and correct the state to recover the original information.

## Features

- Encodes a logical |0⟩ or |1⟩ into a 7-qubit Steane codeword
- Detects and corrects single-qubit bit-flip and phase-flip errors
- Uses ancilla qubits for syndrome extraction
- Constructs custom stabilizer circuits from parity check matrices
- Validates recovery with Qiskit `Statevector` simulation
- Includes unit tests (`tests_p3.py`) to verify error correction

## Technologies

- Python 3
- Qiskit
- NumPy
- Quantum error correction theory

## Usage

1. Install requirements:
   ```bash
   pip install qiskit numpy
   ```

2. Run the main simulator:
   ```bash
   python p3.py
   ```

3. Run tests:
   ```bash
   python tests_p3.py
   ```