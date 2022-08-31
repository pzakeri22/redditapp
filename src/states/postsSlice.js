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
        sort: "hot",
        previousSort: "hot",
        filter: "",
        previousFilter: "",
        modifiedPosts: [],
        filteredPosts: []
    },
    reducers: {
      addCurrentPost: (state, action) => {
          state.currentPostId = action.payload;
      },
      setScrollPosition : (state, action) => {
        state.scrollPosition = action.payload;
      }, 
      setSort: (state, action) => {
          state.previousSort = state.sort;
          state.sort = action.payload;
      },
      setPreviousSort: (state, action) => {
        state.previousSort = action.payload;
      },
      setFilter: (state, action) => {
        state.previousFilter = state.filter;
        state.filter = action.payload;
      },
      setPreviousFilter: (state, action) => {
        state.previousFilter = action.payload;
      },
      setModifiedPosts : (state, action) => {
          state.modifiedPosts = action.payload;
      },
      setFilteredPosts : (state, action) => {
        state.filteredPosts = action.payload;
      },
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
export const selectArePostsLoading = state => state.posts.isLoading;
export const selectPostsError = state => state.posts.hasError;
export const selectPosts = state => state.posts.posts;
export const selectFilter = state => state.posts.filter;
export const selectPreviousFilter = state => state.posts.previousFilter;
export const selectSort = state => state.posts.sort;
export const selectPreviousSort = state => state.posts.previousSort;
export const selectCurrentPost = state => state.posts.currentPostId;
export const selectScrollPosition = state => state.posts.scrollPosition;
export const selectModifiedPosts = state => state.posts.modifiedPosts;
export const selectFilteredPosts = state => state.posts.filteredPosts;

export const { 
  setFilter,
  setPreviousFilter,
  setSort,
  setPreviousSort,
  addCurrentPost,
  setScrollPosition,
  setModifiedPosts,
  setFilteredPosts
} = postsSlice.actions;

export default postsSlice.reducer;