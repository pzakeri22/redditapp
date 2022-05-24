import './App.css';
import React from "react";
import Header from './header/Header.js';
import ResultsContainer from './results/ResultsContainer.js';
import './index.css';


export default function App() {
  return (
    <div class="grid">
      <Header/>
      <ResultsContainer/>
    </div>
  );
}


// const body = document.querySelector("body");
// const scrollbar = window.innerWidth - body.clientWidth;
// body.setAttribute("style", `--scrollbar: ${scrollbar}px`);
