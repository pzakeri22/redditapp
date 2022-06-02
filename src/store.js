import {configureStore} from '@reduxjs/toolkit';
import postsReducer from './postsSlice.js';
import commentsReducer from './commentsSlice.js';

const store = configureStore({
    reducer: {
        posts: postsReducer,
        comments: commentsReducer
    }
})

export default store; 




