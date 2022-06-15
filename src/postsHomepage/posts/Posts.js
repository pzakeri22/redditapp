import Post from './Post.js';
import {selectPostsStates, sortPosts} from '../../states/postsSlice.js';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPosts} from '../../states/api.js';
import React, { useEffect, useState } from 'react';
import { selectArePostsLoading, selectPostsError, selectFilter, selectSort, setModifiedPosts, selectModifiedPosts} from '../../states/postsSlice.js';

export default function Posts() {
    const dispatch = useDispatch();
    const postsLoading = useSelector(selectArePostsLoading);
    // const postsLoading = true;
    const postsError = useSelector(selectPostsError);
    const posts = useSelector(selectPostsStates);
    // const postsError = true;
    const currentFilter = useSelector(selectFilter);
    const currentSort = useSelector(selectSort);
    const modifiedPosts = useSelector(selectModifiedPosts);
    const [postsArray, setPostsArray] = useState([]);

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);
    
    // {
    //     "123": {title : xxx},
    //     "124": {}
    // }
    //hot(default - by ), new (by created), top ( by likes)


/*
posts;object of key value pairs where value is the post object
setPostsArray as empty
--filter out-- posts over 18, spoilers, tournament and contest

---
let testArray =
[{over_18: false, spoiler: false, tournament: undefined, contest: false},
    {over_18: true, spoiler: false, tournament: undefined, contest: false},
{over_18: false, spoiler: false, tournament: {status: 'LIVE', total_participants: 200491, subreddit_id: 't5_2qimj', name: '2022 /r/Formula1 Predictions Tournament'}, contest: true},
{over_18: false, spoiler: false, tournament: undefined, contest: true}];

check for sort, if so sort.


filtering while sort is on has no effect; filtered items displayed based on their hotness order with sort not applied.
setPostsArray to sort

check for filter, if so filter. 
While filter in use, disable sort.
convert title and subreddit to lowercase
convert filter to lowercase
setPostsArray to filter


if no sort or filter, give each item a hotness number corresponding to original value in array.
setPostsArray by hotness; 


[posts, currentFilter, currentSort]
*/
    const createPostArray = () => {
        let postList = Object.values(posts);
        postList = postList.filter(post => {
            if (post.over_18 || post.spoiler || post.tournament || post.contest) {
                return false;
            } 
            return true;
        })
        // console.log(postList);
        return postList;
    }
    
    const addHotRating = (postList) => {
        // console.log(postList);
        //  let newPostList;
        for (let i = 0; i < postList.length; i++) {
            // newPostList = postList;
            postList[i] = {...postList[i], hotRating: i+1};
        }
        return postList;
        // console.log(postList);
    }

    const sortNew = postList => {
        postList.sort(function (a, b) {
            return b.time - a.time;
        })
        return postList;
    }

    const sortLikes = postList => {
        postList.sort(function (a, b) {
            return b.score - a.score;
        })
        return postList;
    }

    const filter = postList => {
        postList = postList.filter(post => {
            const titleOrSubreddit = (post.title+post.subreddit).toLowerCase();
            console.log(titleOrSubreddit);
            if ( titleOrSubreddit.includes(currentFilter.toLowerCase()) ) {
                console.log(true);
                return true;
            } else {
                console.log(false);
                return false;
            }
        });
        console.log(postList);
        return postList;
        
    }

    useEffect(() => {
        setPostsArray([]);
        let postList = createPostArray();
        postList = addHotRating(postList);
        // console.log(postList);
        if (currentSort === "New") {
            console.log("new")
            postList = sortNew(postList);
            // for (const post of postList) {
            //     console.log(post.time)
            // }
        }
        if (currentSort === "Likes") {
            console.log("likes")
            postList = sortLikes(postList);
            // for (const post of postList) {
            //     console.log(post.score)
            // }
        }
        if (currentFilter) {
            console.log(currentFilter);
            postList = filter(postList);
        }
        for (const post of postList) {
            setPostsArray(prev => (
                [...prev, <Post myKey={post.id} post={post}/>]
            ));
        }
    }, [posts, currentFilter, currentSort])

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
    if (currentFilter && postsArray.length === 0) {
        return (
            <section className="posts-error">
                <img src='/imageBank/post-error.png' alt="error"/>
                <p>No posts available.
                <br/>Please try changing your search criteria.</p>
            </section>
        )
    }
}


        // for (const post in posts) {
        //     if (!posts[post].over_18 
        //         && !posts[post].spoiler 
        //         && !posts[post].tournament 
        //         && !posts[post].contest) {
        //             const titleOrSubreddit = (posts[post].title+posts[post].subreddit).toLowerCase();
        //             if ( titleOrSubreddit.includes(currentFilter.toLowerCase()) ) {
        //                 setPostsArray(prev => (
        //                     [...prev, <Post myKey={post} post={posts[post]}/>]
        //                 ));
        //             }
        //     }
        // }  