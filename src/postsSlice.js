import {fetchPosts} from './api.js';
import {createSlice} from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: {},
        isLoading: false,
        hasError: false,
        currentPostId: "",
        filter: "",
        category: ""
    },
    reducers: {
      currentPost: (state, action) => {
          state.currentPostId = action.payload;
      },
      filter: (state, action) => {
          state.filter = action.payload;
      },
      category: (state, action) => {   // newest; time posted, top: score, hot: most comments, default
          state.category = action.payload;
      } 
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

export const selectCurrentPost = state => state.posts.currentPostId;
export const selectPostsStates2 = state => state.posts.posts;
export const selectArePostsLoading = state => state.posts.isLoading;
export const selectPostsError = state => state.posts.hasError;

export const addCurrentPost = postsSlice.actions.currentPost;
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