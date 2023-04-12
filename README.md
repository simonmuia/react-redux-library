# React Redux Library Demonstrated

This is a sample React application built using Vite.js, Redux, and Redux Toolkit. The app demonstrates different functionalities of Redux library.

## Installation

- To run this application locally, clone the repository and run the following commands:

`bash`
`Copy code`
`cd react-redux-vite-app`
`npm install`
`npm run dev`

- This will start the development server at http://localhost:3000.

## Features

- This React Redux Vite app demonstrates the following features of Redux library:

- **Redux Store:**  The app uses a Redux store to manage the application state.

- **Redux Toolkit:** Redux Toolkit is used to simplify the creation of Redux store and reducers. It also provides utility functions for common Redux use cases.

- **Action Creators:** The app uses action creators to create actions, which are dispatched to the Redux store to update the state.

- **Reducers:** The app has multiple reducers to manage different parts of the application state. Each reducer handles specific actions to update its part of the state.

- **Async Actions:** The app demonstrates how to use redux-thunk middleware to handle async actions. It fetches data from a mock API using async actions.

- **Selectors:** The app uses selectors to compute derived data from the application state.

- **Connected Components:** The app uses connect function from react-redux to connect React components to the Redux store. This allows components to access state and dispatch actions.

- **Provider Component:** The app uses Provider component from react-redux to provide the Redux store to all the components in the app.

## Folder Structure

- The application is structured as follows:

- `src:` Contains the application source code.

- `app:` Contains the main app component.

- `components`: Contains the React components used in the app.

- `features`: Contains the Redux slices, which define the state and actions for each feature of the app.

- `services`: Contains the mock API service used to fetch data.

- `store`: Contains the Redux store configuration.

Credits

- This app was created by Simon Muia&trade;

License

- This project is licensed under the MIT License. See the LICENSE file for details.
