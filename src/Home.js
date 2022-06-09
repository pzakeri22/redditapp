import './App.css';
import React from "react";
import Header from './header/Header.js';
import ResultsContainer from '../src/postsHomepage/ResultsContainer.js';
import './index.css';
import {useLayoutEffect, useState } from 'react';


export default function Home() {
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

  return (
    <div className="grid">
      <Header/>
      <ResultsContainer/>
    </div>
  );
}

