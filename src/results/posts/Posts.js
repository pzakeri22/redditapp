import Post from './Post.js';
import {Link} from "react-router-dom";
import {getData} from '../../api.js';


export default function Posts() {
    let posts = getData();

    return (
        <section className="posts">
            {/* <p>Posts</p> */}

            <Link to="/WithComments">  
            {/* "permalink": "/r/mildlyinfuriating/comments/u5ph5l/rmildlyinfuriating_predictions_tournament_1/" */}
                {posts.map((post, index) => {<Post/>})}
                
                

                {/* 
                if (over 18) {
                    return "NSFW - over 18 - "over_18"
                }
                id = index.
                title - "title": "Which option will be second least chosen? ",
                    image/videos - "thumbnail"/"media"/"media_embed/  "https://b.thumbs.redditmedia.com/55bJiOJP6u7rtuY5dpLxHem6YQAi55w1K5u3xCEt-Yk.jpg",
                    thumbs up/down - "score": 20012,
                    time posted - "created"
                    no. comments, "num_comments"
                     "subreddit": "mildlyinfuriating"



                
                */}
            </Link>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>

            
            
        </section>

    );
}