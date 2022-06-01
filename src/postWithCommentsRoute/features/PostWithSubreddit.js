import {useSelector} from 'react-redux';
import { useEffect } from 'react';

export default function PostWithSubreddit() {
    // end of url - extract id
    // use selector to get that post by its IdleDeadline.apply

    let postId;

    useEffect(() => {
        const parametersArray = window.location.href.split('/');
        postId = parametersArray[3];
    }, []);

    return (
        <section className="post-with-subreddit">
            <p>Profile for {postId}</p>
            <p>Post title</p>
            <p>Subreddit</p>
            <p>Post info</p>
            <img src="https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg" style={{height: "10rem"}} alt="tempcakeimage"/>
        </section>
    );
}