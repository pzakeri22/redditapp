import PostWithSubreddit from "./features/PostWithSubreddit.js";
import Comments from "./features/Comments.js";
import { useParams } from "react-router-dom";

export default function PostAndComments() {

    return (
        <main className="post-and-comments">
            <PostWithSubreddit/>
            <Comments/>
        </main>
    );
}