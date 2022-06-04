import {useSelector} from 'react-redux';
import {timeAgo} from '../../calculations.js';
import {selectPostsStates2} from './../../postsSlice.js';

export default function PostWithSubreddit({postId}) {

    const postsArray = useSelector(selectPostsStates2);
    const post = postsArray[postId]; 

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
                <img src={post.image_or_link} alt=""/>
            );
            break;
        }
        default: {
            content = "";
        }
    }

    return (
        <section className="post-with-subreddit">
          <div className="container">
                <h1>{post.title}</h1>
                <p className="subreddit">Subreddit: {post.subreddit}</p>
                {content}
                <div>
                    <div className="score">Score: {post.score}</div>
                    <div className="time">{timeAgo(post.time)}</div>
                    <div className="no-comments">Comments: {post.no_comments}</div>
                </div>
            </div>
        
        </section>

        
    );
}