import fetch from "node-fetch";

export async function getData() {
    try {
        const response = await fetch("https://www.reddit.com/r/all.json");
        if (response.ok) {
            const jsonResponse = await response.json();
            const jsonPosts = jsonResponse.data.children;
            let jsonPostsData = [];  //array of objects containing data for each of the 25 posts
            for (const post of jsonPosts) {
                jsonPostsData.push(post.data);
            }
            console.log(jsonPostsData);
            return jsonPostsData;
        }
        throw new Error('Request Failed!');
    } catch (error) {
        console.log(`Error = ${error}`);
    }
}

getData();


/* 
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

objectArray = jsonResponse.data.children

if objectArray[0].kind = t3 (all of them are kind t3..) t3 means it is a link

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


object.data.children[0].data

{"kind": "Listing", "data": 
    {"after": "t3_ux5hoc", "dist": 25, "modhash": "m9e8wv2bww06a9788e38791fe85981e75be89b68af9c20e284", "geo_filter": null, "children": 
        [{"kind": "t3", "data": {"approved_at_utc":

*/

