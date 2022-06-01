import {Link} from "react-router-dom";


export default function LogoBar() {
    return (
        <section className="logo-bar">

            <Link to="/">
                <img src="../../../../../imageBank/redditfulllogo.png" alt="reddit logo"/>
            </Link>

        </section>
    );
}