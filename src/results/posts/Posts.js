import Post from './Post.js';
import {selectPostsStates2} from '../../postsSlice.js';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPosts} from '../../api.js';
import React, { useEffect } from 'react';
import { selectArePostsLoading, selectPostsError } from '../../postsSlice.js';


export default function Posts() {
    const posts = useSelector(selectPostsStates2);
    const dispatch = useDispatch();
    const postsLoading = useSelector(selectArePostsLoading);
    // const postsLoading = true;
    const postsError = useSelector(selectPostsError);
    // const postsError = true;

    useEffect(() => {
        dispatch(fetchPosts());
    }, [fetchPosts]);
    
    // {
    //     "123": {title : xxx},
    //     "124": {}
    // }

    let postsArray = [];
    for (const post in posts) {
        if (!posts[post].over_18 && !posts[post].spoiler && !posts[post].tournament && !posts[post].contest) {
            //if filter, filter posts
            postsArray.push(<Post key={post} post={posts[post]}/>);
        }
    }

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
                <p>Error occurred whilst loading posts.
                <br/>Please go back and try again.</p>
            </section>
        )
    } 

    return (
        <section className="posts">
            {postsArray}
        </section>

    )

}