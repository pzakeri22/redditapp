import Post from './Post.js';
import {selectPostsStates} from '../../states/postsSlice.js';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPosts} from '../../states/api.js';
import React, { useEffect, useRef } from 'react';
import { selectArePostsLoading, selectPostsError, selectFilter, selectCurrentPost } from '../../states/postsSlice.js';



export default function Posts() {
    const dispatch = useDispatch();
    const postsLoading = useSelector(selectArePostsLoading);
    // const postsLoading = true;
    const postsError = useSelector(selectPostsError);
    const posts = useSelector(selectPostsStates);
    // const postsError = true;
    const currentFilter = useSelector(selectFilter);
    // console.log(currentFilter)
    // const pArrayTest = useRef([]);
    // pArrayTest.current.push(123);
    // console.log(pArrayTest);
    // console.log(pArrayTest.current);

    // console.log(posts);
    // console.log(postsLoading);
    // console.log(postsError);
    // console.log(currentFilter);

    useEffect(() => {
        // console.log("fetchposts");
        dispatch(fetchPosts());
    }, []);
    
    // {
    //     "123": {title : xxx},
    //     "124": {}
    // }

    let postsArray = [];

    // useEffect(() => {
        for (const post in posts) {
            // console.log(post);
            if (!posts[post].over_18 
                && !posts[post].spoiler 
                && !posts[post].tournament 
                && !posts[post].contest) {
                    const titleOrSubreddit = (posts[post].title+posts[post].subreddit).toLowerCase();
                    if (titleOrSubreddit.includes(currentFilter.toLowerCase()) ) {
                        postsArray.push(<Post myKey={post} post={posts[post]}/>);
                        // console.log(postsArray);
                    }
             }
        }    
        // console.log(postsArray);
    // })
    // console.log(postsArray);
//[posts, currentFilter]

    if (postsLoading) {
        return (
            <section className="posts-loading">
                <div className="spinner"></div>
                <p className="pending-text">Loading posts...</p>
            </section>
        )
    }
    if (postsError) {
        return (
            <section className="posts-error">
                <img src='/imageBank/post-error.png' alt="error"/>
                <p>Error occurred while loading posts.
                <br/>Please go back and try again.</p>
            </section>
        )
    } 
    if (postsArray.length > 0) {
        return ( 
            <section className="posts">
                {postsArray}
            </section>
        )
    }
    if (postsArray.length === 0 ) {
        return (
            <section className="posts-error">
                <img src='/imageBank/post-error.png' alt="error"/>
                <p>No posts available.
                <br/>Please try changing your search criteria.</p>
            </section>
        )
    }
}


