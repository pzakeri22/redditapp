import {timeAgo} from './calculations.js';
import {useNavigate, } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectArePostsLoading, selectPostsError, selectFilter, selectCurrentPost, setScrollPosition } from '../../states/postsSlice.js';

export default function Post(props) {
    
    const {myKey, post} = props;
    let navigate = useNavigate();
    const dispatch = useDispatch();

    let content;
    switch (post.type) {
        case "hosted:video": {
            content = (
            <video controls
                className="video"
            >
                <source src={post.video_link} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            );
            break;
        }
        case "link": {
            content = (
            <a href={post.image_or_link}
                className="external-link" style={{fontStyle: "italic"}}>
                    {post.image_or_link}
            </a>
            );
            break;
        }
        case "image": {
            content = (
                <img src={post.image_or_link} className="main-image" alt=""/>
            );
            break;
        }
        default: {
            content = "";
        }
    }

    const handleClick = (e) => {
        dispatch(setScrollPosition(window.pageYOffset));
        if (["video", "external-link"].includes(e.target.className)) {
            return;
        }
        navigate(post.link_extension);
    };

    return (
     <section className="post"
        onClick={handleClick}
        style={{cursor: "pointer"}}
        key={myKey}
        id={myKey}
    >
        <div className="container">
            <h1>{post.title}</h1>
            {content}
            <div className="additional">
                <div className="score">
                    <img src="/imageBank/thumbsup2.png" alt="thumbs up"/>
                    {post.score}
                </div>
                <div className="time">
                    <img src="/imageBank/wall-clock.png" alt="thumbs up"/>
                    {timeAgo(post.time)}
                </div>
                <div className="no-comments">
                    <img src="/imageBank/comment3.png" alt="speech bubble"/>
                    <p>{post.no_comments}</p>
                </div>
            </div>
        </div>
    </section>
    );
}
