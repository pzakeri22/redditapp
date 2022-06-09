import {Link} from "react-router-dom";


export default function LogoBar() {
    return (

            <Link to="/">
                <img src="../../../../../imageBank/redditfulllogo.png" alt="reddit logo" className="logo"/>
            </Link>

    );
}