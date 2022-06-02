import {timeAgo} from '../../calculations.js';


export default function Comment(props) {

    const {key, comment} = props;

    return (
        <section className="fullcomment">
            <p className="username">Username:{comment.author}</p>
            <p className="comment">Comment:{comment.text}</p>
            <p className="comment">Time:{timeAgo(comment.time)}</p>
            <div className="score">Score:{comment.score}</div>
        </section>
    );
}