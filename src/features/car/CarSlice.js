import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: ['Model S','Model X','Model Y','Model 3']
}

const CarSlice = createSlice(
    {
        name: 'car',
        initialState,
        reducers: {}
    }
)

export const selectCar = state => state.car.cars

export default CarSlice.reducer