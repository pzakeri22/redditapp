import {fetchComments} from './api.js';
import {createSlice} from '@reduxjs/toolkit';
/* 
export action creators - export const { addTodo, toggleTodo } = todosSlice.actions

// name: 'todos',
// reducer: (state, action) => newState,
// actions: {
//   addTodo: (payload) => ({type: 'todos/addTodo', payload}),
//   toggleTodo: (payload) => ({type: 'todos/toggleTodo', payload})
// },

//Case reducers should have a name that corresponds to an action type the slice can handle, e.g.;
// dispatch(loadData()); - useeffect
*/

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
export default commentsSlice.reducer;