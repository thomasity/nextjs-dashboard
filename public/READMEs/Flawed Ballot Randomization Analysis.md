# Flawed Ballot Randomization Analysis – EECS 498.8 Election Cybersecurity

This project solves a multi-part homework assignment analyzing flaws in ballot randomization and cryptographic pseudorandom generators used in election systems. It applies reverse engineering, data extraction, and unshuffling techniques to expose vulnerabilities in ballot ordering and sanitization.

## Contents

- `hw2q1.py` and `hw2q1a.py`:  
  - Analyze and reverse engineer multiple linear congruential generator (LCG) sequences.
  - `hw2q1a.py` performs brute-force search to determine LCG parameters for a known sequence.

- `hw2q2.py`:  
  - Processes San Francisco's 2020 general election data.
  - Uses `zipfile` and `json` to locate in-person ballots (Batch ID 0).
  - Identifies a write-in presidential vote by sorting ballot sheets in order of casting.

- `hw2q3.py`:  
  - Reverses improperly sanitized Dominion ICE ballot data.
  - Uses prior knowledge of Republican primary ballot sheet indices.
  - Applies deterministic record ID unshuffling to reconstruct cast order.
  - Outputs a JSON object with ballots in corrected order.

## Technologies

- Python 3
- `json`, `zipfile`, `itertools`
- Manual LCG analysis and substitution cipher reversal

## Usage

Each script corresponds to a specific question:
```bash
python3 hw2q1a.py     # Reverses LCG parameters and extends the sequence
python3 hw2q2.py      # Extracts and sorts ballot sheets by Batch ID and vote
python3 hw2q3.py      # Unscrambles CVRs and reconstructs voting order
Ensure the referenced JSON and ZIP data files are present in the working directory.
```

## License

This project is for educational purposes only. Data used in this analysis was publicly released by San Francisco and is used here strictly for instructional research.
