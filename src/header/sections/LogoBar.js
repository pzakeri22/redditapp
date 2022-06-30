import {Link, useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import { setHomeRedirection } from '../../states/postsSlice.js';
import {useLocation } from "react-router-dom";

export default function LogoBar() {
    
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = () => {
        if (location.pathname === "/r/all") { 
            window.location.reload();
        } else {
            navigate("/r/all");
        }
        dispatch(setHomeRedirection(true));
    };
    
    return (
        <div className="logo-subreddit">
                <img 
                    src="../../../../../imageBank/redditfulllogo.png" 
                    alt="reddit logo" 
                    className="logo"
                    onClick={handleClick}
                />
            <h2 className="home-subreddit">
                r/all
            </h2>
         </div>
    );
}