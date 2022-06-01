import Header from '../header/Header.js';
import PostAndCommentsContainer from './PostAndCommentsContainer.js';
import React, {useEffect} from "react";


export default function PostWithCommentsRoute() {

  useEffect(() => {
    window.scrollTo(0, 0);
  },);


    return (
      <div className="grid">
        <Header/>
        <PostAndCommentsContainer/>
      </div>
    );
}