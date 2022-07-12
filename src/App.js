import './App.css';
import React, {useEffect, useState} from "react";
import './index.css';
import {useSelector} from 'react-redux';
import {selectPosts} from './states/postsSlice.js';
import PostWithCommentsRoute from './postWithCommentsRoute/Container.js'
import Home from './postsHomepage/Home.js'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate, 
} from "react-router-dom";

export default function App() {

  let posts = useSelector(selectPosts);
  const [postRoutes, setPostRoutes] = useState([]);

  useEffect(() => {
      for (const post in posts) {  
        setPostRoutes((prev) => ([
          ...prev,
          <Route 
            path={`/${posts[post].link_extension}`} 
            element={
              <PostWithCommentsRoute
                post={posts[post]}
              />
            }
            key={posts[post].id} 

          />
        ]))
      } 
    return () => {setPostRoutes([])}
  }, [posts]);
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navigate to="/r/all" />} key="homeoriginal"/>            
          <Route path="/r/all" element={<Home />} key="homeredirect"/>            
            {postRoutes}
          <Route path="*" 
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here! Please go back and try again.</p>
              </main>
            } 
            key="error"
          />
      </Routes>
    </BrowserRouter>
  )
}
