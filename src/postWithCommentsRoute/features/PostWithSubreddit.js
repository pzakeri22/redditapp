import {useSelector} from 'react-redux';
import {timeAgo} from '../../postsHomepage/posts/calculations.js';
import {selectPosts} from '../../states/postsSlice.js';

export default function PostWithSubreddit({postId}) {

    const postsArray = useSelector(selectPosts);
    const post = postsArray[postId]; 

    let content;
    switch (post.type) {
        case "hosted:video": {
            content = (
            <video controls
                className="video"
            >
                <source src={post.video_link} type="video/mp4"/>
                Your browser does not support this video.
            </video>
            );
            break;
        }
        case "link": {
            content = (
            <a href={post.image_or_link}
                className="external-link" style={{fontStyle: "italic"}} target="_blank" rel="noopener noreferrer">
                    <img src="/imageBank/resize.png" alt="link" className="link-symbol"/>{post.image_or_link}
            </a>
            );
            break;
        }
        case "image": {
            content = (
                <img src={post.image_or_link} alt="" className="main-image"/>
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
                <p className="subreddit">Subreddit: r/{post.subreddit}</p>
                {content}
                <div className="additional">
                    <div className="score">
                        <img src="/imageBank/thumbsup2.png" alt="thumbs up"/>
                        {post.score}
                    </div>
                    <div className="time">
                    <img src="/imageBank/wall-clock.png" alt="time posted"/>
                        {timeAgo(post.time)}
                    </div>
                    <div className="no-comments">
                        <img src="/imageBank/comment3.png" alt="speech bubble"/>
                        {post.no_comments}
                    </div>
                </div>
            </div>  
        </section>
    );
}