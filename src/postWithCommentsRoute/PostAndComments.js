import PostWithSubreddit from "./features/PostWithSubreddit.js";
import Comments from "./features/Comments.js";
import { useParams } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import {addCurrentPost, selectCurrentPost } from '../postsSlice.js';
import {fetchComments} from '../api.js'


export default function PostAndComments() {

  // {
    //     "123": {title : xxx},
    //     "124": {}
    // }

    const dispatch = useDispatch();
    const url = window.location.href;
    const urlExtension = `/r/${url.split('/r/')[1]}`;
    console.log(urlExtension);
    const postId = url.split('/')[6];

    const test = "t3_uyp0n2";
    console.log(test.split("_")[1]);

    useEffect(() => {
        dispatch(addCurrentPost(postId));
        dispatch(fetchComments(urlExtension));
    }, []);

    return (
        <main className="post-and-comments">
            <PostWithSubreddit postId={postId}/>
            <Comments postId={postId}/>
        </main>
    );
}