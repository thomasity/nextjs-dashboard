# Structural Analysis and Logistics Toolkit

This project contains a set of MATLAB scripts designed to solve real-world engineering problems involving structural mechanics and operational logistics. Each script focuses on a specific calculation scenario, such as load distribution, storage capacity, structural safety, and revenue generation.

## Project Structure

All MATLAB functions are stored in the `Project1/` folder:

### 1. `actualLoad.m`

**Purpose:**
Calculates the maximum load a roof support pole must bear based on a given weight distribution matrix.

**Inputs:**

* `W` (matrix): Weight distribution across a surface.

**Outputs:**

* `maxLoad`: The largest load any of the four support poles must support.

**Details:**

* The weight matrix is divided into four quadrants.
* Each pole is assumed to support a separate quadrant.

---

### 2. `additionalPallets.m`

**Purpose:**
Determines how many additional storage pallets can be stacked under a given roof height.

**Inputs:**

* `roofHeight` (scalar): Total height available.
* `pallets` (matrix): Number of pallets currently in each storage cell.
* `palletHeight` (scalar): Height of a single pallet.

**Outputs:**

* `numPallets`: Total number of additional pallets that can be added.

**Details:**

* Computes remaining vertical space in each cell.
* Rounds down fractional pallet space using `floor`.

---

### 3. `criticalLoad.m`

**Purpose:**
Computes the **Euler's critical load** for a column, which determines when it will buckle under compressive force.

**Inputs:**

* `E` (scalar): Modulus of elasticity.
* `I` (scalar): Moment of inertia.
* `K` (scalar): Effective length factor.
* `L` (scalar): Length of the column.

**Outputs:**

* `P_cr`: Euler’s critical load.

---

### 4. `parkingRevenue.m`

**Purpose:**
Calculates parking lot revenue using only the edge spots (perimeter) of the lot.

**Inputs:**

* `timeUsed` (matrix): Number of hours each parking spot was occupied.
* `price` (matrix): Hourly rate for each spot.

**Outputs:**

* `revenue`: Total revenue from all edge parking spots.

**Details:**

* Considers the outermost rows and columns of the matrix.
* Excludes corners that would otherwise be double-counted.

---

## Getting Started

### Requirements

* MATLAB (R2018 or newer recommended)

### Usage

Each script is a standalone function. To use, simply call the function with the appropriate parameters.