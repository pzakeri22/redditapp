import {configureStore} from '@reduxjs/toolkit';
import postsReducer from './postsSlice.js';
// import yReducer from 'ySlice'

const store = configureStore({
    reducer: {
        posts: postsReducer
        // comments: commentsReducer
    }
})

export default store; 




