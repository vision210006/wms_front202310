import { createSlice } from '@reduxjs/toolkit';

const storeSlice = createSlice({
    name: 'store',
    initialState: {
        statuses: null
    },
    reducers: {
        SET_STORES: (state, action) => {
            state.stores = action.payload;
        },
    }
});

export const { SET_STORES } = storeSlice.actions;

export default storeSlice;