import PostWithSubreddit from "./features/PostWithSubreddit.js";
import Comments from "./features/Comments.js";

export default function PostAndComments() {

    const url = window.location.href;
    const urlExtension = `/r/${url.split('/r/')[1]}`;
    const postId = url.split('/')[6];

    return (
        <main className="post-and-comments">
            <PostWithSubreddit postId={postId}/>
            <Comments urlExtension={urlExtension}/>
        </main>
    );
}