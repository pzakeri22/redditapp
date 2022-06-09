import {timeAgo} from '../../postsHomepage/posts/calculations.js';


export default function Comment(props) {

    const {key, comment} = props;

    return (
        <section className="comment">
            <p className="username">{comment.author}</p>
            <div className="text">{comment.text}</div>
            <div className="time-and-score">
                <div className="score">{comment.score}</div>
                <p className="time">{timeAgo(comment.time)}</p>
            </div>
        </section>
    );
}