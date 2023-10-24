import { createSlice } from '@reduxjs/toolkit';

const estimateSlice = createSlice({
    name: 'estimate',
    initialState: {
        estimates: null
    },
    reducers: {
        SET_ESTIMATES: (state, action) => {
            state.estimates = action.payload;
        },
    }
});

export const { SET_ESTIMATES } = estimateSlice.actions;

export default estimateSlice;