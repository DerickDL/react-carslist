import { createSlice, nanoid } from "@reduxjs/toolkit"

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        list: []
    },
    reducers: {
        addCar(state, action) {
            state.list.push({
                id: nanoid(),
                name: action.payload.name,
                cost: action.payload.cost
            });
        },
        removeCar(state, action) {
            const updatedCar = state.list.filter((car) => car.id !== action.payload)
            state.list = updatedCar;
        },
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        }
    }
})

export const { addCar, removeCar, changeSearchTerm } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;