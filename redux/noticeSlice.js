import { createSlice } from '@reduxjs/toolkit';

const noticeSlice = createSlice({
    name: 'notice',
    initialState: {
        notices: null
    },
    reducers: {
        SET_NOTICES: (state, action) => {
            state.notices = action.payload;
        },
    }
});

export const { SET_NOTICES } = noticeSlice.actions;

export default noticeSlice;