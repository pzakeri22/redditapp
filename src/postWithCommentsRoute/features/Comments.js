import Comment from "./Comment.js";
import {useSelector, useDispatch} from 'react-redux';
import {fetchComments} from '../../api.js';
import { useEffect } from 'react';
import {selectComments, selectAreCommentsLoading, selectCommentsError} from '../../commentsSlice.js';

export default function Comments({urlExtension}) {

    const dispatch = useDispatch();
    const comments = useSelector(selectComments);
    const commentsLoading = useSelector(selectAreCommentsLoading);
    // const commentsLoading = true;
    // const commentsError = useSelector(selectCommentsError);
    const commentsError = true;

    useEffect(() => {
        dispatch(fetchComments(urlExtension));
    }, []);

    let commentsArray = [];
    for (const comment in comments) {
        if ( comments[comment].text && !(comments[comment].text).includes("[deleted]") && !(comments[comment].text).includes("[removed]") ) {
            commentsArray.push(<Comment key={comment} comment={comments[comment]} />);
        }
    }

    if (commentsLoading) {
        return (
            <section className="comments-loading"> 
                <div className="spinner"></div> 
                <p>Loading posts...</p>
            </section>
        )
    }

    
    if (commentsError) {
        return (
            <section className="comments-error">
                <img src='/imageBank/post-error.png' alt="error"/>
                <p className="pending-text">Error loading comments.
                <br/>Please go back and try again.</p>
            </section>
        )
    } 
    
    return (
        <section className="comments">
            {commentsArray}
        </section>
    );
}