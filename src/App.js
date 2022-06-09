import './App.css';
import React, {useEffect} from "react";
import './index.css';
import {useSelector} from 'react-redux';
import {selectPostsStates2} from './states/postsSlice.js';
import PostWithCommentsRoute from './postWithCommentsRoute/Container.js'
import Home from './Home.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {

  let posts = useSelector(selectPostsStates2);
  let postsArray = [];


  useEffect(() => {
    for (const post in posts) {
      if (!posts[post].over_18 && !posts[post].spoiler && !posts[post].tournament && !posts[post].contest) {
        postsArray.push(
          <Route 
            path={`/${posts[post].link_extension}`} 
            element={
              <PostWithCommentsRoute 
                key={post} 
                post={posts[post]}
              />
              } 
          />
        );
      }
   }
  }, [posts]);

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />            
          <Route path="/PostWithCommentsRoute" element={<PostWithCommentsRoute/>} />
          {/* <Route path="/PostWithCommentsRoute/:post" element={<PostWithCommentsRoute/>} /> */}
          {postsArray}
          <Route path="*" element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here! Please go back and try again.</p>
              </main>
          } />
      </Routes>
    </BrowserRouter>


  );
}
