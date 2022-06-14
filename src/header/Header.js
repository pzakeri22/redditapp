import LogoBar from './sections/LogoBar.js';
import FilterSort from './sections/FilterSort.js';
import { useLayoutEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { selectCurrentPost, selectScrollPosition, setScrollPosition } from '../states/postsSlice.js';
// import { useSelector } from 'react-redux';

export default function Header() {
    // const [pathname, setPathname] = useState();
    // const location = useLocation();
    // const currentPost = useSelector(selectCurrentPost);
    // const scrollPosition = useSelector(selectScrollPosition);

    // console.log(location.pathname);

    // window.onpopstate = () => {
    //     console.log("went back");
    //     // what is the locationj pathname?
    //     // if(location.pathname == )
    //     //state of post id ..
    //     // const element = document.getElementById("content"); // get current post id from state
    //     //scroll into state the current post. 
    //     console.log(currentPost)
    //     // const element = document.getElementById(currentPost);
    //     const element = document.getElementsByClassName("filter-sort");
    //     // element.scrollIntoView();
    // }

    // useEffect(() => {
    //     setPathname(location.pathname);
    // })

    // window.onpopstate = () => {
    //     console.log("went back");
    //     console.log(scrollPosition);
    //     if(location.pathname == "/") {
    //       console.log("pathname = /");
    //       console.log(scrollPosition);
    //     //   window.scrollTo(0, scrollPosition);
    //       console.log(1111);
    //     //   console.log(currentPost);
    //     //   const post = document.getElementById(currentPost);
    //     //   console.log(post);
    //     }
    //     //state of post id ..
    //     // const element = document.getElementById("content"); // get current post id from state
    //     //scroll into state the current post. 
    //     // element.scrollIntoView();
    // }

    useLayoutEffect(() => {
        function updateSize() {
          const header = document.querySelector('header');
          const headerHeight = header.clientHeight;
          const resultsContainer =  document.getElementsByClassName('results-container')[0];
          resultsContainer.style.top = `${headerHeight - 5}px`;
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
      });

    return (
        <header>
            <LogoBar/>
            <FilterSort/>
        </header>
    );
}