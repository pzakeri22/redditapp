import {selectPostsStates, selectPostsStates2} from '../../postsSlice.js';
import postsReducer from '../../postsSlice.js';
import {fetchPosts} from '../../api.js';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import {timeAgo} from './../../calculations.js';

//dispatch(action(argument));

export default function Post({key, post}) {

let content;
    switch (post.type) {
        case "hosted:video": {
            content = (<video controls>
                <source src={post.video_link} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>);
            break;
        }
        case "link": {
            content = (<p className="external-link">
                External link: {post.image_or_link}
            </p>);
            break;
        }
        case "image": {
            content = (<img src={post.image_or_link} alt=""/>);
            break;
        }
        default: {
            content = "";
        }
    }

    
    return (
        <section className="post">
            {/* {getPostData("/r/aww/comments/uyp0n2/an_elephant_family_is_sleeping_photographed_by_a/")} */}
            <h1>{post.title}</h1>
            <p className>Subreddit: {post.subreddit}</p>
            {content}
            <div className="score">Score: {post.score}</div>
            <div className="time">{timeAgo(post.time)}</div>
            <div className="comments">{post.no_comments}</div>
        </section>
    );

}