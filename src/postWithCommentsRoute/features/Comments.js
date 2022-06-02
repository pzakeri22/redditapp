import Comment from "./Comment.js";
import {useSelector, useDispatch} from 'react-redux';
import {fetchComments} from '../../api.js';
import { useEffect } from 'react';
import {selectComments} from '../../commentsSlice.js';

export default function Comments({postId}) {

    const comments = useSelector(selectComments);

    let commentsArray = [];
    for (const comment in comments) {
        if ( !(comments[comment].text).includes("[deleted]") && !(comments[comment].text).includes("[removed]") ) {
            commentsArray.push(<Comment key={comment} comment={comments[comment]} />)
        }
    }

    // useEffect(() => {
    // }, []);

    return (
        <section className="fullcomments">
            {commentsArray}
        </section>
    );
}