import PostWithSubreddit from "./PostWithSubreddit";
import Comments from "./Comments";

export default function PostAndComments() {
    return (
        <main className="results-container">
            <PostWithSubreddit/>
            <Comments/>
        </main>
    );
}