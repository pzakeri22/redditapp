import Posts from '../postsHomepage/posts/Posts.js';

export default function ResultsContainer({scroll}) {
    return (
        <main className="results-container">
            <Posts scroll={scroll}/>
        </main>
    );
}