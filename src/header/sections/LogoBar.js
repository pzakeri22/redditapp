import {Link, Navigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { setScrollPosition, filterPosts, sortPosts } from '../../states/postsSlice.js';
import {useLocation } from "react-router-dom";

export default function LogoBar() {
    
    const dispatch = useDispatch();
    const location = useLocation();

    const handleClick = () => {
        dispatch(sortPosts("Hot"));
        dispatch(filterPosts(""));
        if (location.pathname === "/") { 
            window.location.reload();
        }
        dispatch(setScrollPosition(0));
    };
    
    return (
        <div className="logo-subreddit">
            <Link to="/" onClick={handleClick}>
                <img 
                    src="../../../../../imageBank/redditfulllogo.png" 
                    alt="reddit logo" 
                    className="logo"
                />
            </Link>
            <h2 className="home-subreddit">r/all</h2>
         </div>
    );
}