import {useSelector, useDispatch} from 'react-redux';

export default function PostWithSubreddit() {
    return (
        <section className="post-with-subreddit">
            <p>Post title</p>
            <p>Subreddit</p>
            <p>Post info</p>
            <img src="https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg" style={{height: "10rem"}} alt="tempcakeimage"/>
        </section>
    );
}