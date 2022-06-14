import {timeAgo} from '../../postsHomepage/posts/calculations.js';
import React from 'react'
import ReactMarkdown from 'react-markdown';
// import ReactDOM from 'react-dom'
// import { Markup } from 'react-render-markup';
// import rehypeRaw from "rehype-raw";

// import { Remarkable } from 'remarkable';
// var md = new Remarkable();

export default function Comment(props) {

    const {key, comment} = props;
    // const markdown = {
    //     description: comment.text_html
    // }
    // console.log(comment.text_html);
    // const renderHTML = (rawHTML: string) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

    function htmlDecode(input){
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    return (
        <section className="comment">
            <p className="username">{comment.author}</p>
            {/* <Markup markup={comment.text_html} /> */}
            {/* {md.render(comment.text_html)} */}
            {/* <div className="text">{md.render(comment.text_html)}</div> */}
            {/* <ReactMarkdown children={markdown.description} rehypePlugins={[rehypeRaw]} /> */}
            {/* <ReactMarkdown>{comment.text_html}</ReactMarkdown> */}
            {/* <ReactMarkdown>{comment.text_html}</ReactMarkdown> */}
            {/* <div className="text">{comment.text}</div> */}
            {/* {renderHTML(comment.text)} */}
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
