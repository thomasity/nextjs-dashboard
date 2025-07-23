# Distributed MapReduce Framework in Python

This project implements a complete MapReduce system in Python. It provides a job submission tool, a centralized manager process, and distributed worker nodes that execute mapper and reducer functions. The framework allows users to run parallel data processing jobs over a set of input files and gather aggregated results in an output directory.

## Features

- `submit.py`: CLI utility to submit MapReduce jobs (input dir, output dir, mapper/reducer scripts)
- `manager/`: Orchestrates job execution and tracks task completion
- `worker/`: Executes mapper and reducer tasks assigned by the manager
- `utils/`: Helper functions for job coordination, file transfer, and socket I/O
- Supports job configuration via command-line flags (host, port, mapper, reducer, input/output dirs)
- Emulates distributed system design with TCP socket-based communication

## Technologies

- Python 3
- Click (for CLI parsing)
- JSON + Sockets (for message passing)
- Custom thread handling and job scheduling

## Usage

1. Start the manager process:
   ```bash
   ./bin/mapreduce start
   ```

2. Submit a job using:
   ```bash
   python -m mapreduce.submit \
     --input tests/testdata/input \
     --output output \
     --mapper tests/testdata/wordcount/mapper.py \
     --reducer tests/testdata/wordcount/reducer.py
   ```

The output directory will contain the final reduced results.