# Warehouse Management System (React Native + SQLite)

## Overview

This project is a **Warehouse Management System** that allows users to manage items in a collection, including performing CRUD (Create, Read, Update, Delete) operations. The front-end is built using **React Native**, while the back-end is powered by **Node.js** and **SQLite**.

## Features

- **View Items**: Displays a list of all items currently stored in the warehouse, including their ID, name, description, quantity, and price.
- **Add New Item**: Allows users to add a new item to the collection with details such as name, description, quantity, and price.
- **Edit Item**: Users can edit existing items in the collection.
- **Delete Item**: Users can delete individual items from the collection.
- **Delete All Items**: Provides an option to delete all items in the collection at once.
- **Replace Collection**: Users can replace the entire item collection with a new set of data.

## Tech Stack

- **Frontend**:
  - **React Native** for mobile app development.
  - **React** hooks (`useState`, `useEffect`) for managing component state and side effects.
  - **FlatList** for rendering a scrollable list of items.
  - **Alert** for displaying success and error messages.
  
- **Backend**:
  - **Node.js** with **Express.js** for handling API requests.
  - **SQLite** for local database management, storing item data (name, description, quantity, price).
  - **SQLite3** Node.js module for database interaction.
  
- **API Endpoints**:
  - **GET `/api`**: Retrieves all items in the collection.
  - **POST `/api`**: Adds a new item to the collection.
  - **PUT `/api/:id`**: Updates an existing item by its ID.
  - **DELETE `/api/:id`**: Deletes a specific item by ID.
  - **DELETE `/api`**: Deletes all items in the collection.
  - **PUT `/api`**: Replaces the entire collection with a new set of items.


## UI Overview

![WhatsApp Image 2025-02-04 at 16 54 26](https://github.com/user-attachments/assets/1ca02991-42b6-45b5-b147-3504fb272227)

## Installation

To get started with this app, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/danilonakai/warehouse_management_reactnative.git
    cd warehouse_management_reactnative
    ```

2. **Backend Setup**:
   - Navigate to the `backend` folder:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the backend server:
     ```bash
     npm start
     ```
   - The server will run on `http://localhost:3001`.

3. **Frontend Setup**:
   - Navigate to the `frontend` folder:
     ```bash
     cd frontend/CollectionApp
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Run the **frontend** app on your device or emulator:
     ```bash
     npm start
     ```

Your app should now be running, with both the frontend and backend services started. The frontend will launch in your browser or emulator, while the backend will be running on your local server.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
