# EECS 388 Project 3 – Certificate Forgery and Multi-Factor Authentication Bypass

This project simulates a series of attacks on a fictional secure data exchange known as the USDCE (University Secure Digital Certificate Exchange). It focuses on exploiting certificate trust chains, manipulating client certificates, and bypassing two-factor authentication systems based on TOTP (Time-Based One-Time Passwords).

## Objectives

- Extract and forge public key credentials
- Generate spoofed client certificates
- Harvest TOTP secrets and generate valid tokens
- Interact with challenge servers via crafted HTTPS queries
- Simulate identity impersonation based on weak certificate validation

## Key Files

- `createKey.py`: Generates RSA key pair (private and public)
- `totp_code.py`: Decodes a TOTP secret (e.g., from QR code) and computes valid one-time passwords
- `any_query.py`: Script used to interact with the server using forged identities
- `get_client_cert.py`: Retrieves a client certificate from the server, used in impersonation
- `privkey.pem`, `publickey.pem`: Generated key material for crypto operations
- `cert-chain.pem`: Forged certificate chain to bypass client authentication
- `account.txt`, `suspicious.txt`, `progress.txt`: Log or result files
- `QRCODE.png`: Encodes the user's TOTP secret for visual decoding

## Technologies

- Python 3
- `pyotp`, `cryptography`, `ssl`, `requests`
- PEM-based RSA key formats
- HTTPS and certificate-based mutual authentication

## Usage

```bash
python3 createKey.py
python3 get_client_cert.py
python3 any_query.py
python3 totp_code.py
```