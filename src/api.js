import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
    'posts/loadData',
    async (thunkAPI) => {  //could thunkAPI be reason for 
        const jsonResponse = await fetch("https://www.reddit.com/r/all.json");
        const response = await jsonResponse.json();
        const posts = response.data.children;
        let postsData = {};  //array of objects containing data for each of the 25 posts
        for (const post of posts) {
            const media = post.data.media;
            postsData[post.data.id] = {
                id : post.data.id, 
                over_18 : post.data.over_18, 
                spoiler: post.data.spoiler,
                title : post.data.title,
                type: post.data.post_hint,
                is_video : post.data.is_video,
                video_link : (media && !('oembed' in media)? media.reddit_video.fallback_url : ""),
                video_height : (media && !('oembed' in media)? media.reddit_video.height : ""),
                video_width : (media && !('oembed' in media)? media.reddit_video.width : ""),
                image_or_link : post.data.url,
                score : post.data.score,
                time : post.data.created,
                no_comments : post.data.num_comments,
                subreddit : post.data.subreddit,
                link_extension : post.data.permalink,
            };
        }
        return postsData;
    } 
)

export const fetchComments = createAsyncThunk( //post = /r/aww/comments/uyp0n2/an_elephant_family_is_sleeping_photographed_by_a/
    'comments/loadComments',
    async (post, thunkAPI) => { 
        const jsonResponse = await fetch(`https://www.reddit.com${post}.json`);
        const response = await jsonResponse.json();
        const comments = response[1].data.children //w/ot replies
        let commentsData = {};  //array of objects containing data for each of comments which arent replies
        for (const comment of comments) {
            const info = comment.data;
            commentsData[comment.data.id] = {
                id : info.id, 
                author: info.author,
                time: info.created,
                score: info.score,
                text: info.body,
                text_html: info.body_html,
                extension: info.permalink,
            };
        }
        return commentsData;
    }
)

/*
on article post;
//thumbnail: default under link to article post. vs thumbnail with url

"permalink": "/r/news/comments/v0zded/a_9yearold_describes_escaping_through_a_window/",
"gildings": {
                    "gid_1": 1
                },
"post_hint": "link",
"domain": "cnn.com",
                    "url_overridden_by_dest": "https://www.cnn.com/2022/05/30/us/uvalde-texas-elementary-school-shooting-monday/index.html",
                    "url": "https://www.cnn.com/2022/05/30/us/uvalde-texas-elementary-school-shooting-monday/index.html",


on image post;
                    "permalink": "/r/WhitePeopleTwitter/comments/v0yule/and_this_continues_and_nothing_happened/",
"gildings": {},
"post_hint": "image",
                    "url_overridden_by_dest": "https://i.redd.it/28ln7aa4ul291.png",
                    "url": "https://i.redd.it/28ln7aa4ul291.png",


"domain": "i.redd.it",


*/

/*
    if (over 18) {
        return "NSFW - over 18 - "over_18"
    }
    id = index.
    title - "title": "Which option will be second least chosen? ",
        image/videos - "thumbnail"/"media"/"media_embed/  "https://b.thumbs.redditmedia.com/55bJiOJP6u7rtuY5dpLxHem6YQAi55w1K5u3xCEt-Yk.jpg",

"media_only
"
        thumbs up/down - "score": 20012,
        time posted - "created"
        no. comments, "num_comments"
            "subreddit": "mildlyinfuriating"
*/

// {
//     post.data.name: {post.data},
// }


// export const fetchPostData = createAsyncThunk {
//     'posts/loadData',
//     async (thunkAPI) => {
//         const response = await fetch("https://www.reddit.com/r/all.json");
//         const jsonResponse = await response.json();
//         const jsonPosts = jsonResponse.data.children;
//         let jsonPostsData = [];  //array of objects containing data for each of the 25 posts
//         for (const post of jsonPosts) {
//             jsonPostsData.push(post.data);
//         }
//         console.log(jsonPostsData);
//         return jsonPostsData;
//     }
// }


//  async function fetchPosts() {
//     try {
//         const response = await fetch("https://www.reddit.com/r/all.json");
//         if (response.ok) {
//             const response = await response.json();
//             const posts = response.data.children;
//             let postsData = {};  //array of objects containing data for each of the 25 posts
//             for (const post of posts) {
//                 const media = post.data.media;
//                 postsData[post.data.name] = {
//                     id : post.data.id, //maybe not needed if name works?
//                     over_18 : post.data.over_18, 
//                     title : post.data.title,
//                     is_video : post.data.is_video,
//                     video_link : (media ? media.reddit_video.fallback_url : ""),
//                     video_height : (media ? media.reddit_video.height : ""),
//                     video_width : (media ? media.reddit_video.width : ""),
//                     image : post.data.url,
//                     score : post.data.score,
//                     time : post.data.created,
//                     no_comments : post.data.num_comments,
//                     subreddit : post.data.subreddit,
//                     link_extension : post.data.permalink
//                 };
//             }
//             console.log(postsData);
//             return postsData;
//         }
//          throw new Error('Request Failed!');
//     } catch (error) {
//         console.log(`Error = ${error}`);
//     }
// }


/* 

not using:
                        image1 : post.data.url_overridden_by_dest,  - same as post.data.url
                        name : post.data.name - same as id but with prefix


Time;
const jsonData = jsonResponse.data.children[0].data.created
            const milliseconds = jsonData*1000;
            console.log(milliseconds);
            console.log(Date.now());
            const msDiff = Date.now() - milliseconds;
            if (msDiff <  3600000) { // < 1 hour diff
                const minsDiff = Math.round(msDiff/60000);
                console.log(`${minsDiff} minutes ago`);
                return `${minsDiff} minutes ago`;
            }
            const hrsDiff =  Math.round(msDiff / 3600000);
            console.log(`${hrsDiff} hours ago`);
            return `${hrsDiff} hours ago`;

*/

// "type": "module" -  I added this to package.json file to get fetch to work.

/*

comments are not on main object. 

title - "title": "Which option will be second least chosen? ",
image
thumbs up/down - "score": 20012,
time posted
no. comments


videos:
"media": 
    {"reddit_video": 
        {
            "bitrate_kbps": 2400, "fallback_url": "https://v.redd.it/sq8bm0q0lc191/DASH_720.mp4?source=fallback", "height": 720, "width": 408, "scrubber_media_url": "https://v.redd.it/sq8bm0q0lc191/DASH_96.mp4", "dash_url": "https://v.redd.it/sq8bm0q0lc191/DASHPlaylist.mpd?a=1655979649%2CZjA3ZTc0ZTU5OTYxNmQ4NWM0ODM1ODBjNjAwOGFlMDlmZDliNjhhZjJiMjUyNjhjNTU3NWNiMGQ3M2Q0MDdiOA%3D%3D&amp;v=1&amp;f=hd", "duration": 45, "hls_url": "https://v.redd.it/sq8bm0q0lc191/HLSPlaylist.m3u8?a=1655979649%2CNTljNzlmYTk4MmJmZDgzODc2YjhhMjZmMTNiNzBiNzVhYzYyZDU0Y2NhNjQyOWI3MDQxNDVjY2QwYWMyOWRmMA%3D%3D&amp;v=1&amp;f=hd", "is_gif": false, "transcoding_status": "completed"
        }
    }, 
    "is_video": true}
}

"media_embed": {
    "content": "&lt;iframe width=\"356\" height=\"200\" src=\"https://www.youtube.com/embed/Go8nTmfrQd8?feature=oembed&amp;enablejsapi=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen&gt;&lt;/iframe&gt;", "width": 356, "scrolling": false, "height": 200
}

"num_comments": 571

"over_18": false,

"permalink": "/r/mildlyinfuriating/comments/u5ph5l/rmildlyinfuriating_predictions_tournament_1/", 

"score": 20012,

"selftext_html": null

 "subreddit": "mildlyinfuriating"

 "thumbnail": "https://b.thumbs.redditmedia.com/55bJiOJP6u7rtuY5dpLxHem6YQAi55w1K5u3xCEt-Yk.jpg",


"created_utc" : 1653364843.0
new Date(1394104654000)


subreddit - info only found on subreddit itself
message - info only on messages themselves. (same as comments?)


*/

