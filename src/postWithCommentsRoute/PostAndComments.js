import PostWithSubreddit from "./features/PostWithSubreddit.js";
import Comments from "./features/Comments.js";

export default function PostAndComments() {
    return (
        <main className="post-and-comments">
            <PostWithSubreddit/>
            <Comments/>
        </main>
    );
}