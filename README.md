# Reddit Minimal App - README 

## Aim

To build a simplified Reddit web application that allows users to view posts and comments provided by Reddit's API.

## Wireframes

I made the app responsive by developing both mobile and desktop views to suit all devices. Desktop view was implemented for devices with a screen width larger than 848px. Below are my initial wireframes built on Invision showing how the website would look on both devices. 

### Mobile Homepage

![mobile homepage wireframe](https://github.com/pzakeri22/redditapp/blob/main/public/imageBank/Wireframes/Reddit-mobile-home.png?raw=true)

Breaking this wireframe down helped me identify a list of components that would need to be built. In the end I didn't split the Post component into seperate sections because the features inside were very simple and creating separate components would have overcomplicated the file structure.

### Mobile Comments Page

![mobile comments page wireframe](https://github.com/pzakeri22/redditapp/blob/main/public/imageBank/Wireframes/Reddit-mobile-route.png?raw=true)

I designed the look of the app using mobile-first design. This meant I was constantly testing my app in mobile view, adding css for smaller dimensions or using responsive styling/units for all screens. Once a section looked good in mobile view I used techniques such as media queries to adjust the styling for larger screens.

### Desktop Homepage

![desktop homepage page wireframe](https://github.com/pzakeri22/redditapp/blob/main/public/imageBank/Wireframes/Reddit-desktop-home.png?raw=true)

One change I made here was removing the subreddit from the homepage. Having less information on the homepage improves user experience as it allows users to skim through posts more quickly. Also, including the subreddit on both pages meant that on smaller devices, there was no visible difference between the homepage and comments page until you scrolled down the page. This made it trickier to identify when the comments page had loaded, given the seamless loading experience with react router.

### Desktop Comments Page

![desktop comments page wireframe](https://github.com/pzakeri22/redditapp/blob/main/public/imageBank/Wireframes/Reddit-desktop-route.png?raw=true)

Changes to all wireframes: After styling most of my app I noticed there was no way for the user to tell which part of reddit they were looking at, so I added the subreddit "r/all" to the header. 
<br/><br/> 

## Sample Screenshots

### Homepage on Desktop View
![mobile homepage screenshot](https://github.com/pzakeri22/redditapp/blob/main/public/imageBank/illustrations/homepage-screenshot.png?raw=true)

This displays roughly the top 25 posts found on reddit's own homepage (r/all).

### Comments Page on Desktop View

![comments page screenshot](https://github.com/pzakeri22/redditapp/blob/main/public/imageBank/illustrations/comments-screenshot.png?raw=true)

When you click through any post on the homepage, the corresponding comments page is loaded, displaying the same post but with the subreddit name added and comments underneath.

## Technologies and Software Used

- HTML v5
- CSS v4.15
- JavaScript v1.7
- React v18.0.1
- Redux v4.2.0
- React Router v6.3.0
- Markdown
- Jest v28.1
- React Testing Library v13.2.0
- Git and Github
- Command line and file navigation

## Features

- Responsive for use on any device, e.g. desktop, mobile, tablet.
- Renders displays for loading or error states before the full page loads. During errors, provides a way to leave the error state and try again.
- Users can sort and search posts.
- Utilises the reddit API to fetch posts and comments from reddit directly.
- Uses React Router to navigate between pages and generate a comments page for each post.
- Clicking through to the comment's page stores the current scroll position, sort, and filter settings in state. These are restored when pressing the browsers' back button.    Clicking the "reddit-minimal" home button resets these settings to their defaults.

## Future work

Although I implemented basic testing with Jest and React Testing Library, in the future with more time I would like to add further unit, integration and end to end tests.

## Launch

To launch this app, please visit https://myredditminimal.netlify.app/.
If you identify any issues, feel free to contact me on p.zakeri22@hotmail.com.