import './App.css';
import Header from './header/Header.js';
import ResultsContainer from '../src/postsHomepage/ResultsContainer.js';
import './index.css';
import {useSelector, useDispatch} from "react-redux";
import React, {useLayoutEffect, useState, useEffect } from 'react';
import { selectScrollPosition, selectSort, setScrollPosition } from './states/postsSlice';


export default function Home() {

  /* 
    go to scrollPosition when press back.
    
    if scrollPosition or currentSort

  */

  const scrollPosition = useSelector(selectScrollPosition);
  // const currentSort = useSelector(selectSort);
  const dispatch = useDispatch();

  useEffect(() => {
    if (scrollPosition) {
      window.scrollTo(0, scrollPosition);
    }
  },);

  return (
    <div className="grid">
      <Header/>
      <ResultsContainer/>
    </div>
  );
}

