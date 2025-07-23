# Tumor Detection and Visualization in Medical Imaging

This MATLAB project implements a basic system for detecting tumors in medical images, removing noise from the images, and visualizing the results using heatmaps and a simulated watch display. The project emphasizes image preprocessing, segmentation, and basic visualization for diagnostic assistance.

## Features

- `detectTumor.m`: Core logic to analyze an input image and detect tumor regions.
- `removeNoise.m`: Applies noise reduction to improve detection accuracy.
- `heatmap.m`: Generates a heatmap to highlight regions of interest.
- `zones.m`: Defines the zones used for analysis or display.
- `WatchDisplay.m`: A custom visual interface to show tumor location (simulated wearable).

## Technologies

- MATLAB for numerical and image processing
- Custom image segmentation and display logic

## Usage

1. Load your medical image data in MATLAB.
2. Run `removeNoise.m` to preprocess the image.
3. Use `detectTumor.m` to perform analysis.
4. Visualize results with `heatmap.m` and `WatchDisplay.m`.
