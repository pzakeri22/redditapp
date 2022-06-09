import Header from '../header/Header.js';
import PostAndCommentsContainer from './PostAndCommentsContainer.js';
import React, {useEffect, useState, useLayoutEffect} from "react";


export default function PostWithCommentsRoute() {

  const [headerHeight, setHeaderHeight] = useState();

  useLayoutEffect(() => {
    function updateSize() {
      const header = document.querySelector('header');
      setHeaderHeight(header.clientHeight);
      const resultsContainer =  document.getElementsByClassName('results-container')[0];
      resultsContainer.style.top = `${headerHeight - 5}px`;

    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  });

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