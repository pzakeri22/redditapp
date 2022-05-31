import {fetchPosts} from './api.js';
import {createSlice} from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: {},
        isLoading: false,
        hasError: false
    },
    extraReducers: {
        [fetchPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.posts = action.payload;
        },
        [fetchPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export const selectPostsStates = state => state.posts;
export const selectPostsStates2 = state => state.posts.posts;
export default postsSlice.reducer;
/* 
export selectors 
export const selectIsCompleteIDs = state => state.todos.filter(
  todo => todo.isComplete).map(todo => todo.id)

export default XXX.reducer
export action creators - export const { addTodo, toggleTodo } = todosSlice.actions
*/

// name: 'todos',
// reducer: (state, action) => newState,
// actions: {
//   addTodo: (payload) => ({type: 'todos/addTodo', payload}),
//   toggleTodo: (payload) => ({type: 'todos/toggleTodo', payload})
// },

//Case reducers should have a name that corresponds to an action type the slice can handle, e.g.;
// dispatch(loadData()); - useeffect