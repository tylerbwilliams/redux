
import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 100 },
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        addAmount: (state, action) => {
            state.value += action.payload;
        }
    }
})

export const selectCounter = (state) => state.counter.value;

export const {
    increment,
    decrement,
    addAmount,
} = counterSlice.actions

export default counterSlice.reducer;
