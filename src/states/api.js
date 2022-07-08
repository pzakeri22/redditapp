import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
    'posts/loadData',
    async () => { 
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
                tournament: post.data.tournament_data,
                contest: post.data.contest_mode,
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

export const fetchComments = createAsyncThunk( 
    'comments/loadComments',
    async (post) => { 
        ////post example = /r/aww/comments/uyp0n2/an_elephant_family_is_sleeping_photographed_by_a/
        const jsonResponse = await fetch(`https://www.reddit.com${post}.json`);
        const response = await jsonResponse.json();
        const comments = response[1].data.children 
        let commentsData = {};  //array of objects containing data for each of comments which arent replies
        for (const comment of comments) {
            const info = comment.data;
            const commentId = info.id;
            commentsData[commentId] = {
                comment_id : commentId, 
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