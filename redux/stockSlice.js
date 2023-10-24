import { createSlice } from '@reduxjs/toolkit';

const stockSlice = createSlice({
    name: 'stock',
    initialState: {
        stocks: null
    },
    reducers: {
        SET_STOCKS: (state, action) => {
            state.stocks = action.payload;
        },
    }
});

export const { SET_STOCKS } = stockSlice.actions;

export default stockSlice;