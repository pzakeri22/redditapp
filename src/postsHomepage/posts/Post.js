import {timeAgo} from './calculations.js';
import {useNavigate} from "react-router-dom";

export default function Post(props) {
    
    const {key, post} = props;
    let navigate = useNavigate();

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

    return (
     <section className="post"
        onClick={e => {
            if (e.target !== e.currentTarget) {
                if (["video", "external-link"].includes(e.target.className)) {
                    console.log(e.target.className);
                    return;
                }
                navigate(post.link_extension);
            }
        }}
        style={{cursor: "pointer"}}
        tabIndex="1"
    >
        <div className="container">
            <h1>{post.title}</h1>
            <p className="subreddit">Subreddit: {post.subreddit}</p>
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
/*
        <Link className="postcontainer"
        to="/PostWithCommentsRoute"

        <div 
        onClick={() => window.location='http://localhost:3000/PostWithCommentsRoute'}
        style={{cursor: "pointer"}}
        >

        this.props.history.push('/fff')
*/