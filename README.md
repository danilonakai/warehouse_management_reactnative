# Warehouse Stock Management App with React Native

A mobile application built with React Native to manage warehouse inventory. The app allows warehouse staff to add, edit, and delete items, view stock quantities, and manage pricing efficiently.

## Features

- **Item List:** Displays a list of items in the warehouse with ID, name, description, quantity, and price.
- **Add Item:** Users can add a new item to the list by entering the item's name, description, quantity, and price.
- **Edit Item:** Allows users to update item details (name, description, quantity, and price).
- **Delete Item:** Users can delete specific items from the list.
- **Delete All Items:** A button to delete all items from the inventory at once.
- **Replace Collection:** Set the item list to a predefined template (e.g., stock list from a backup or default template).
- **Stock Updates:** Track item quantities and prices, ensuring the inventory is always up to date.

## Input Fields

- **Name:** Enter the name of the item.
- **Description:** A short description of the item.
- **Quantity:** Specify the stock quantity available.
- **Price:** Enter the unit price of the item.

## Action Buttons

- **Add Item:** Adds a new item to the list with the input data.
- **Delete All Items:** Removes all items from the current inventory.
- **Replace Collection:** Resets the list to a predefined template, effectively replacing the current list with a new one.

## UI Overview

![WhatsApp Image 2025-02-04 at 16 54 26](https://github.com/user-attachments/assets/1ca02991-42b6-45b5-b147-3504fb272227)

## Installation

To get started with this app, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/danilonakai/warehouse_management_reactnative.git
    ```

2. Enter the project folder:
    ```bash
    cd warehouse_management_reactnative
    ```

3. Install dependencies for the **frontend**:

    - Navigate to the frontend folder:
      ```bash
      cd frontend/CollectionApp
      ```

    - Install the dependencies:
      ```bash
      npm install
      ```

4. Install dependencies for the **backend**:

    - Navigate to the backend folder:
      ```bash
      cd ../../backend
      ```

    - Install the dependencies:
      ```bash
      npm install
      ```

5. Run the **frontend** app on your device or emulator:
    ```bash
    cd ../frontend/CollectionApp
    npm start
    ```

6. Run the **backend** server:
    ```bash
    cd warehouse_management_reactnative/backend
    npm start
    ```

Your app should now be running, with both the frontend and backend services started. The frontend will launch in your browser or emulator, while the backend will be running on your local server.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
