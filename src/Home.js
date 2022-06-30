import './App.css';
import Header from './header/Header.js';
import ResultsContainer from '../src/postsHomepage/ResultsContainer.js';
import './index.css';
import {useSelector, useDispatch} from "react-redux";
import React, { useEffect } from 'react';
import { 
  selectScrollPosition, 
  selecthomeRedirection, 
  setScrollPosition, 
  setFilter, 
  setSort, 
  setHomeRedirection, 
  selectFilter, 
  selectSort, 
  selectPreviousSort, 
  selectRenderCount, 
  setPreviousSort, 
  setPreviousFilter, 
  selectPreviousFilter
} from './states/postsSlice';

export default function Home() {

  const scrollPosition = useSelector(selectScrollPosition);
  const homeRedirection = useSelector(selecthomeRedirection);
  const currentFilter = useSelector(selectFilter);
  const currentSort = useSelector(selectSort);
  const previousSort = useSelector(selectPreviousSort);
  const previousFilter = useSelector(selectPreviousFilter);
  const dispatch = useDispatch();
  // const renderCount = useSelector(selectRenderCount);

  useEffect(() => {
    if (homeRedirection) {
      console.log("homeredirection");
      dispatch(setSort("Hot"));
      dispatch(setFilter(""));
      dispatch(setScrollPosition(0));
      dispatch(setHomeRedirection(false));
    }
  }, [homeRedirection])

  const scrollWindow = () => {
      console.log("scrollchange");
      console.log(scrollPosition);
      window.scrollTo(0, scrollPosition);
  }
 
  useEffect(() => {
    if (currentFilter !== previousFilter) {
      console.log("filterChange");
      console.log(previousFilter);
      console.log(currentFilter);
      dispatch(setScrollPosition(0)); 
      scrollWindow();
      dispatch(setPreviousFilter(currentFilter));
    }
  }, [currentFilter])

  useEffect(() => {
    if (currentSort !== previousSort) {
      console.log("sortChange");
      console.log(previousSort)
      console.log(currentSort);
      dispatch(setScrollPosition(0));
      scrollWindow();
      dispatch(setPreviousSort(currentSort));
    }
  }, [currentSort])

  useEffect(() => {
    if (scrollPosition) {
      scrollWindow();
    }
  })

  return (
    <div className="grid">
      <Header/>
      <ResultsContainer scroll={scrollWindow}/>
    </div>
  );
}

