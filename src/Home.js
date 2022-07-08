import './App.css';
import Header from './header/Header.js';
import ResultsContainer from '../src/postsHomepage/ResultsContainer.js';
import './index.css';
import {useSelector, useDispatch} from "react-redux";
import React, { useEffect } from 'react';
import { 
  selectScrollPosition, 
  selectHomeRedirection, 
  setScrollPosition, 
  setFilter, 
  setSort, 
  setHomeRedirection, 
  selectFilter, 
  selectSort, 
  selectPreviousSort, 
  setPreviousSort, 
  setPreviousFilter, 
  selectPreviousFilter
} from './states/postsSlice';

export default function Home() {

  const scrollPosition = useSelector(selectScrollPosition);
  const homeRedirection = useSelector(selectHomeRedirection);
  const currentFilter = useSelector(selectFilter);
  const currentSort = useSelector(selectSort);
  const previousSort = useSelector(selectPreviousSort);
  const previousFilter = useSelector(selectPreviousFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (homeRedirection) {
      dispatch(setSort("hot"));
      dispatch(setFilter(""));
      dispatch(setScrollPosition(0));
      dispatch(setHomeRedirection(false));
    }

  }, [homeRedirection, dispatch])

  useEffect(() => {
    if (currentFilter !== previousFilter) {
      dispatch(setScrollPosition(0)); 
      dispatch(setPreviousFilter(currentFilter)); //causes re-render which triggers window scroll
    }
  }, [currentFilter, dispatch])

  useEffect(() => {
    if (currentSort !== previousSort) {
      dispatch(setScrollPosition(0));  //causes re-render which triggers window scroll
      dispatch(setPreviousSort(currentSort)); 
    }
  }, [currentSort, dispatch])

  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  })

  return (
    <div className="grid">
      <Header/>
      <ResultsContainer/>
    </div>
  );
}

