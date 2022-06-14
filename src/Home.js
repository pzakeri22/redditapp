import './App.css';
import Header from './header/Header.js';
import ResultsContainer from '../src/postsHomepage/ResultsContainer.js';
import './index.css';
import {useSelector} from "react-redux";
import React, {useLayoutEffect, useState, useEffect } from 'react';
import { selectScrollPosition } from './states/postsSlice';


export default function Home() {

  const [headerHeight, setHeaderHeight] = useState();
  const scrollPosition = useSelector(selectScrollPosition);

  useEffect(() => {
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
  }});

  return (
    <div className="grid">
      <Header/>
      <ResultsContainer/>
    </div>
  );
}

