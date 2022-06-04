import Comment from "./Comment.js";
import {useSelector, useDispatch} from 'react-redux';
import {fetchComments} from '../../api.js';
import { useEffect } from 'react';
import {selectComments, selectAreCommentsLoading, selectCommentsError} from '../../commentsSlice.js';
import postErrorImage from '../../results/posts/

export default function Comments({urlExtension}) {

    const dispatch = useDispatch();
    const comments = useSelector(selectComments);
    const commentsLoading = useSelector(selectAreCommentsLoading);
    const commentsError = useSelector(selectCommentsError);

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
                <p className="pending-text">Loading posts...</p>
            </section>
        )
    }

    
    if (commentsError) {
        return (
            <section className="comments-error">
                <img src={postErrorImage} className="error-image" alt="error"/>
                <p className="pending-text">Error occurred whilst loading posts.
                <br/>Please go back and try again.</p>
            </section>
        )
    } 
    
    return (
        <section className="fullcomments">
            {commentsArray}
        </section>
    );
}