import { useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import { setHomeRedirection } from '../../states/postsSlice.js';

export default function LogoBar() {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        // if (location.pathname === "/r/all")  
            navigate("/");
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