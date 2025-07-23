# Roomerines

This mobile application was developed for EECS 441: Mobile App Development. It is a social media platform designed to help university students find housing and connect with potential roommates who share similar interests. The app combines a clean React Native frontend with Firebase services for secure authentication, storage, and optional cloud functions.

## 🎯 Purpose

The app allows students to:
- Create profiles and take a survey to determine roommate type
- Share information about their living preferences
- Browse and connect with other students
- Securely sign in with Multi-factor authorization via authentication email

## 🔐 Features

### Frontend (React Native + Expo)
- Cross-platform mobile support (iOS, Android, Web)
- Expo Router with modular screen navigation
- User-friendly UI with reusable components
- Image picker and media integration
- Permissions handling (camera, media library)

### Backend (Firebase)
- **Email Link Authentication** (passwordless sign-in)
- Firestore (optional): for storing user profile and listing data
- Firebase Storage: for images or housing photos
- Custom action link handling and auth state persistence

## 🗂️ Structure

- `app/`: Screens and routes
- `components/`: Shared UI building blocks
- `constants/`: App-wide styles and values
- `firebase.js`: Firebase initialization
- `backend/`: (optional) server-side config and tools

## 🛠️ Technologies

- React Native + Expo
- TypeScript
- Firebase (Auth, Firestore, Storage)

## 🚀 Getting Started

1. Create a Firebase project and enable Email Link Authentication.
2. Add Firebase config to `firebase.js`.
3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the app:
   ```bash
   npm start
   ```

5. Or run on a specific platform:
   ```bash
   npm run android
   npm run ios
   npm run web
   ```