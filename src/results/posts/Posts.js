import Post from './Post.js';
import {Link} from "react-router-dom";
import {selectPostsStates2} from '../../postsSlice.js';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPosts} from '../../api.js';
import { useEffect } from 'react';


export default function Posts() {
    const posts = useSelector(selectPostsStates2);
    const dispatch = useDispatch();

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
        // if (!posts[post].over_18 && !posts[post].spoiler && !posts[post].tournament && !posts[post].contest) {
            postsArray.push(<Post key={post} post={posts[post]}/>);
        }
    }

    return (
        <section className="posts">
                {postsArray}
        </section>
    );
}