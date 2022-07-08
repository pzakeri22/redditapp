import {timeAgo} from '../../postsHomepage/posts/calculations.js';
import React from 'react'

export default function Comment(props) {

    const {comment} = props;

    function htmlDecode(input){
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    return (
        <section className="comment">
            <p className="username">{comment.author}</p>
            <div className="text" dangerouslySetInnerHTML={{ __html: htmlDecode(comment.text_html) }} />
            <div className="time-and-score">
                <p className="time">{timeAgo(comment.time)}</p>
                <div className="score">
                    <img src="/imageBank/thumbsup2.png" alt="thumbs up"/>
                    {comment.score}
                </div>
            </div>
        </section>
    );
}
