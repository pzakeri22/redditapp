import {fetchPosts} from './api.js';
import {createSlice} from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: {},
        isLoading: false,
        hasError: false,
        currentPostId: "",
        scrollPosition: 0,
        sort: "Hot",
        previousSort: "Hot",
        filter: "",
        previousFilter: "",
        modifiedPosts: [],
        filteredPosts: [],
        homeRedirection: false,
        renderCount: 0
    },
    reducers: {
      currentPost: (state, action) => {
          state.currentPostId = action.payload;
      },
      scrollPosition : (state, action) => {
        state.scrollPosition = action.payload;
      }, 
      sort: (state, action) => {
          state.previousSort = state.sort;
          state.sort = action.payload;
      },
      previousSort: (state, action) => {
        state.previousSort = action.payload;
      },
      filter: (state, action) => {
        state.previousFilter = state.filter;
        state.filter = action.payload;
      },
      previousFilter: (state, action) => {
        state.previousFilter = action.payload;
      },
      modifiedPosts : (state, action) => {
          state.modifiedPosts = action.payload;
      },
      filteredPosts : (state, action) => {
        state.filteredPosts = action.payload;
      },
      homeRedirection : (state, action) => {
        state.homeRedirection = action.payload;
      },
      renderCount : (state, action) => {
        state.renderCount = state.renderCount + 1;
      }
    },
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.posts = action.payload;
        },
        [fetchPosts.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})

export const selectCurrentPost = state => state.posts.currentPostId;
export const selectPostsStates = state => state.posts.posts;
export const selectArePostsLoading = state => state.posts.isLoading;
export const selectPostsError = state => state.posts.hasError;
export const selectFilter = state => state.posts.filter;
export const selectPreviousFilter = state => state.posts.previousFilter;
export const selectSort = state => state.posts.sort;
export const selectPreviousSort = state => state.posts.previousSort;

export const selectRenderCount = state => state.posts.renderCount;


export const selectScrollPosition = state => state.posts.scrollPosition;
export const selectModifiedPosts = state => state.posts.modifiedPosts;
export const selectFilteredPosts = state => state.posts.filteredPosts;
export const selecthomeRedirection = state => state.posts.homeRedirection;

export const setFilter = postsSlice.actions.filter;
export const setPreviousFilter = postsSlice.actions.previousFilter;
export const setSort = postsSlice.actions.sort;
export const setPreviousSort = postsSlice.actions.previousSort;
export const addCurrentPost = postsSlice.actions.currentPost;
export const setScrollPosition = postsSlice.actions.scrollPosition;
export const setModifiedPosts = postsSlice.actions.modifiedPosts;
export const setFilteredPosts = postsSlice.actions.filteredPosts;
export const setHomeRedirection = postsSlice.actions.homeRedirection;
export const setRenderCount = postsSlice.actions.renderCount;


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