# LQ3K: Lightweight Quantum Circuit Simulator in Python

This Python project implements a minimal quantum circuit simulator named **LQ3K**, capable of simulating basic quantum operations on multiple qubits using linear algebra and NumPy. It provides educational insight into quantum state evolution, gate application, and probabilistic measurement.

## Features

- Supports quantum gates: Hadamard (`h`), Pauli (`x`, `y`, `z`), phase gates (`s`, `t`, `sdg`), and controlled-NOT (`cx`)
- Simulates quantum state evolution with complex matrix multiplications
- Measures all qubits at the end of simulation and returns a classical result
- Includes test suite (`tests_p1.py`) with representative examples

## Technologies

- Python 3
- NumPy for quantum state representation and matrix math

## Example

```python
qc = LQ3K(2)
qc.h(0)
qc.cx(0, 1)
print(qc.simulate_run([1, 0, 0, 0]))
``` 

## Usage

To run the simulator:
```bash
python p1.py
```

To run the tests:
```bash
python tests_p1.py
```