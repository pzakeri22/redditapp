import Post from './Post';
import {Link} from "react-router-dom";


export default function Posts() {
    return (
        <section className="posts">
            <p>Posts</p>
            {/* map function here for each post. /post below will be the post itself*/}
            <Link to="/WithComments">  
                <Post/>
            </Link>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>

        </section>

    );
}