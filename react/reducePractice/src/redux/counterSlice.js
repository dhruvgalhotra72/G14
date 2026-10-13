
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',

    initialState: {
        value: 0,
        arr: [10, 20, 30, 40],
        user: {
            name: 'one',
            email: 'one@gmail.com'
        }
    },

    reducers: {
        increment: (state) => {
            state.value += 1;
        },

        decrement: (state) => {
            state.value -= 1;
        },

        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },

        updateName: (state, action) => {
            state.user.name = action.payload;
        },

        updateEmail: (state, action) => {
            state.user.email = action.payload;
        }
    }
});

export const {
    increment,
    decrement,
    incrementByAmount,
    updateName,
    updateEmail
} = counterSlice.actions;

export default counterSlice.reducer;
