import Post from './Post.js';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPosts} from '../../states/api.js';
import React, { useEffect} from 'react';
import { selectArePostsLoading, 
    selectPostsError, 
    selectFilter, 
    selectSort, 
    setModifiedPosts, 
    selectModifiedPosts, 
    selectPosts, 
} from '../../states/postsSlice.js';

export default function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const postsLoading = useSelector(selectArePostsLoading);
    const postsError = useSelector(selectPostsError);
    const currentFilter = useSelector(selectFilter);
    const currentSort = useSelector(selectSort);
    const modifiedPosts = useSelector(selectModifiedPosts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    useEffect(() => {
        let postList = [];
        dispatch(setModifiedPosts(postList));
        postList = Object.values(posts);
        postList = removeUnwanted(postList);
        postList = addHotRating(postList);
        postList = redoSorting(postList)
        dispatch(setModifiedPosts(postList));
    }, [posts, dispatch])

    const removeUnwanted = (postList) => {
        postList = postList.filter(post => {
            if (post.over_18 || post.spoiler || post.tournament || post.contest) {
                return false;
            } 
            return true;
        })
        return postList;
    }
    
    const addHotRating = (postList) => {
        for (let i = 0; i < postList.length; i++) {
            postList[i] = {...postList[i], hotRating: postList.length-1-i};
        }
        return postList;
    }

    const redoSorting = (postList) => {
        let sortVariable;
        if (currentSort === "new") {
            sortVariable = "time";
        }
        if (currentSort === "likes") {
            sortVariable = "score";
        }
        const sortedPostList = postList.slice().sort((a, b) => {
            return b[sortVariable] - a[sortVariable];
        });
        return sortedPostList;
    }

    useEffect(() => {
        let sortVariable;
        if (currentSort === "hot") {
            sortVariable = "hotRating";
        }
        if (currentSort === "new") {
            sortVariable = "time";
        }
        if (currentSort === "likes") {
            sortVariable = "score";
        }
        let postList = modifiedPosts;
        const sortedPostList = postList.slice().sort((a, b) => {
            return b[sortVariable] - a[sortVariable];
        });
        dispatch(setModifiedPosts(sortedPostList));
    }, [currentSort, dispatch]) 

    const finalPostsArray = () => {
        let postList = modifiedPosts;
        if (currentFilter) {
            postList = filter(postList);
        }
        let finalPostList = [];
        postList.slice().forEach(post => {
            finalPostList.push(<Post key={post.id} post={post}/>);
        })
        return finalPostList;
    }

    const filter = (postList) => {
        const filteredPostList = postList.filter(post => {
            const titleOrSubreddit = (post.title+post.subreddit).toLowerCase();
            if ( titleOrSubreddit.includes(currentFilter.toLowerCase()) ) {
                return true;
            } else {
                return false;
            }
        });
        return filteredPostList;
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
                <p>Error occurred while loading posts.
                <br/>Please go back and try again.</p>
            </section>
        )
    } 
    if (modifiedPosts.length > 0) {
        return ( 
            <section className="posts">
                {finalPostsArray()}
            </section>
        )
    }
    if (currentFilter && modifiedPosts.length === 0) {
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

        /*
        useEffect(() => {
                setPostsArray([]);
                let postList = createPostArray();
                postList = addHotRating(postList);
                // console.log(postList);
                if (currentSort === "new") {
                    console.log("new")
                    postList = sortNew(postList);
                    // for (const post of postList) {
                    //     console.log(post.time)
                    // }
                }
                if (currentSort === "likes") {
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
        */

/*
posts;object of key value pairs where value is the post object
setPostsArray as empty
--filter out-- posts over 18, spoilers, tournament and contest

---
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
