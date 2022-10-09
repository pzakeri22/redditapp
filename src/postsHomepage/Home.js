import '../App.js'
import Header from '../header/Header.js';
import ResultsContainer from './ResultsContainer.js';
import '../index.css';
import {useSelector, useDispatch} from "react-redux";
import React, { useEffect } from 'react';
import { 
  selectScrollPosition, 
  setScrollPosition, 
  selectFilter, 
  selectSort, 
  selectPreviousSort, 
  setPreviousSort, 
  setPreviousFilter, 
  selectPreviousFilter
} from '../states/postsSlice';
export default function Home() {

  const scrollPosition = useSelector(selectScrollPosition);
  const currentFilter = useSelector(selectFilter);
  const currentSort = useSelector(selectSort);
  const previousSort = useSelector(selectPreviousSort);
  const previousFilter = useSelector(selectPreviousFilter);
  const dispatch = useDispatch();


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

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   const background = document.getElementsByTagName("body")[0];
  //   background.style.backgroundColor  = "rgb(255, 243, 232)";  
  //   return () => { background.style.backgroundColor  = "white";}
  // });

  return (
    <div className="grid">
      <Header/>
      <ResultsContainer/>
    </div>
  );
}

