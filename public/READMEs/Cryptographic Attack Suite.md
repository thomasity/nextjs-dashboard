# Cryptographic Attack Suite: Bleichenbacher, Padding Oracle, and Hash Extension

This Python project implements and demonstrates various cryptographic attacks commonly studied in security courses. Each module targets a specific vulnerability in cryptographic primitives, such as RSA padding, MAC constructions, and insecure hash usage.

## Modules

- `bleichenbacher.py`: Simulates Bleichenbacher's RSA signature forgery attack by crafting a fake signature that passes verification using cube root approximation.
- `padding_oracle.py`: Demonstrates a padding oracle attack against a system vulnerable to CBC-mode padding error leakage.
- `len_ext_attack.py`: Performs a hash length extension attack on SHA-256-based MACs, allowing forgery of extended messages.
- `good.py`: Contains secure reference implementations to contrast with vulnerable versions.
- `evil.py`: Contains insecure cryptographic implementations intended for exploitation.

## Technologies

- Python 3
- `hashlib`, `sys`, custom math/crypto modules
- Custom implementations of signature formats and byte manipulations

## Usage

Each script is self-contained and executable:
```bash
python3 bleichenbacher.py "message"
python3 len_ext_attack.py
python3 padding_oracle.py
```