import {timeAgo} from '../../calculations.js';


export default function Comment(props) {

    const {key, comment} = props;

    return (
        <section className="comment">
            <p className="username">Username:{comment.author}</p>
            <p className="text">Comment:{comment.text}</p>
            <p className="time">Time:{timeAgo(comment.time)}</p>
            <div className="score">Score:{comment.score}</div>
        </section>
    );
}