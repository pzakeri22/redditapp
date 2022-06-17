import Header from '../header/Header.js';
import PostAndCommentsContainer from './PostAndCommentsContainer.js';
import React, {useEffect} from "react";

export default function PostWithCommentsRoute() {

  useEffect(() => {
    window.scrollTo(0, 0);
    const background = document.getElementsByTagName("body")[0];
    background.style.backgroundColor  = "rgb(242, 247, 253)";
    return () => { background.style.backgroundColor  = "white";}

  });

  //scroll down, go to page, then sort on that new page

    return (
      <div className="grid">
        <Header/>
        <PostAndCommentsContainer/>
      </div>
    );
}