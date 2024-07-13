import { createSlice } from "@reduxjs/toolkit";
import {
  increment as incrementReducer,
  decrement as decrementReducer,
  incrementByAmount as incrementByAmountReducer,
} from "../reducers/counterReducer";

// Define the initial state
const initialState = {
  value: 0,
};

// Create the slice
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: incrementReducer,
    decrement: decrementReducer,
    incrementByAmount: incrementByAmountReducer,
  },
});

// Export action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;
