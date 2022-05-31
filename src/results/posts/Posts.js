import Post from './Post.js';
import {Link} from "react-router-dom";
import {selectPostsStates2} from '../../postsSlice.js';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPosts} from '../../api.js';
import { useEffect } from 'react';


export default function Posts() {
    const posts = useSelector(selectPostsStates2);
    const dispatch = useDispatch();

    // {
    //     "123": {title : xxx},
    //     "124": {}
    // }
    
    useEffect(() => {
        dispatch(fetchPosts());
    }, [fetchPosts]);
    
    let postsArray = [];
    for (const post in posts) {
        if (!posts[post].over_18 && !posts[post].spoiler) {
            postsArray.push(<Post key={post} post={posts[post]}/>);
        }
    }

    


    return (
        <section className="posts">

            <Link to="/PostWithCommentsRoute">  

                {/* "permalink": "/r/mildlyinfuriating/comments/u5ph5l/rmildlyinfuriating_predictions_tournament_1/" */}

                {/* {posts.map((post, index) => {<Post/>})} */}
                {/* 
                if (over 18) {
                    return "NSFW - over 18 - "over_18"
                }
                id = index.
                title - "title": "Which option will be second least chosen? ",
                    image/videos - "thumbnail"/"media"/"media_embed/  "https://b.thumbs.redditmedia.com/55bJiOJP6u7rtuY5dpLxHem6YQAi55w1K5u3xCEt-Yk.jpg",
                    thumbs up/down - "score": 20012,
                    time posted - "created"
                    no. comments, "num_comments"
                    "subreddit": "mildlyinfuriating"
                
                */}
                {postsArray}
                {/* <Post/> */}
            </Link>
            {/* <Post/> */}
            {/* <Post/>
            <Post/>
            <Post/> */}

            
            
        </section>

    );
}