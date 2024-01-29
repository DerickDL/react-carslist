import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./slices/carsSlice";
import { formReducer } from "./slices/formSlice";
import { changeName, changeCost } from "./slices/formSlice";
import { addCar, removeCar, changeSearchTerm } from "./slices/carsSlice";


const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
});

export { store, changeSearchTerm, changeName, changeCost, addCar, removeCar };
