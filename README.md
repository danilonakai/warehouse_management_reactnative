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
    git clone https://github.com/your-username/warehouse-stock-management.git
    ```

2. Install dependencies:
    ```bash
    cd warehouse-stock-management
    npm install
    ```

3. Set up the environment variables by creating a `.env` file in the root directory. Add the necessary configurations such as API URLs or database credentials.

4. Run the app on your device or emulator:
    ```bash
    npx react-native run-android   # For Android
    npx react-native run-ios       # For iOS
    ```

## Contributing

We welcome contributions! If you have ideas to improve the app or have found bugs, please fork the repository and create a pull request.

### Steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and write tests for your modifications.
4. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- React Native for the mobile app framework.
- [React Navigation](https://reactnavigation.org/) for navigation.
- [Redux](https://redux.js.org/) for state management.
- [Firebase](https://firebase.google.com/) for backend and authentication.

## Contact

For any questions or support, please reach out to [your-email@example.com](mailto:your-email@example.com).
