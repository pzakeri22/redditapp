import {fetchComments} from './api.js';
import {createSlice} from '@reduxjs/toolkit';

const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        comments: {},
        isLoading: false,
        hasError: false
    },
    extraReducers: {
        [fetchComments.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.comments = action.payload;
        },
        [fetchComments.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export const selectComments = state => state.comments.comments;
export const selectAreCommentsLoading = state => state.comments.isLoading;
export const selectCommentsError = state => state.comments.hasError;
export default commentsSlice.reducer;