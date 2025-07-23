# Smart Grocery & Meal Planner App – React Native

This React Native app helps users manage groceries, discover recipes, and track meal statistics in one integrated mobile experience. It provides features for organizing shopping lists, searching meals, and monitoring usage habits.

## ✨ Features

- 🛒 **Groceries**: Create and manage shopping lists
- 🍳 **Recipes**: Search and view recipes based on ingredients
- 📈 **Statistics**: Visualize food or habit data
- 👤 **Profile/Login**: Manage user profiles and login state
- 🔄 **Global State**: Shared context across components
- 📱 **Navigation**: Multi-screen layout using React Navigation

## 🗂️ Project Structure

- `Groceries.js`, `listsHome.js` – Grocery and list UI
- `Recipes.js`, `search.js` – Recipe finder logic
- `Statistics.js` – Displays usage or meal trends
- `Profile.js`, `Login.js` – Account and auth components
- `Context.js` – Shared global state
- `Navigation.js` – Tab or stack-based navigation
- `styles/style.js` – Centralized styling

## 🛠️ Technologies Used

- React Native
- React Navigation
- Context API
- JavaScript (ES6+)

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the app:
   ```bash
   npx expo start
   ```

   or (if using React Native CLI):

   ```bash
   npx react-native run-android
   npx react-native run-ios
   ```