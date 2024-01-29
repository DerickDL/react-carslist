# CarList App Readme
Welcome to the CarList App! This is a simple todo-list-like application designed for managing a list of cars. You can easily add, delete, search, and view the details of cars in the list.

## Features
1. Add, Delete, Search, and View Cars: The app allows you to perform basic CRUD operations on the car list. You can add new cars, delete existing ones, search for a specific car, and view the complete list of cars.
2. Two Important Information: Each car in the list is composed of two key pieces of information: the car name and its cost.
3. Total Value Computation: The app automatically computes and displays the total value of all the cars on the list. This feature is derived from the sum of the costs of individual cars.

## Technologies Used
The CarList App is built using the following technologies:

- React: The app is developed using the React library, providing a robust and efficient user interface.
- Redux: State management in the app is handled using Redux, enabling a predictable state container.
- Redux Toolkit: Redux Toolkit is employed to streamline the Redux setup, making it easier to work with Redux and reducing boilerplate code.
- Slice: Redux Toolkit's createSlice is utilized to define a Redux slice for managing the car list state.
- Store and Reducers: The app employs a Redux store and reducers to manage the application's state and handle actions.
- extraReducers: Redux Toolkit's extraReducers is used to handle asynchronous actions or actions that affect multiple slices of the state.
