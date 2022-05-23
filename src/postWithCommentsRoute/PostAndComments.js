import PostWithSubreddit from "./features/PostWithSubreddit";
import Comments from "./features/Comments";

export default function PostAndComments() {
    return (
        <main className="post-and-comments">
            <PostWithSubreddit/>
            <Comments/>
        </main>
    );
}