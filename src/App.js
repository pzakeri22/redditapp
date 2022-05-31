import './App.css';
import React from "react";
import Header from './header/Header.js';
import ResultsContainer from './results/ResultsContainer.js';
import './index.css';
import store from './store.js';
import {Provider} from 'react-redux';


export default function App() {
  return (
     <Provider store={store}>

    <div className="grid">

      <Header/>

      <ResultsContainer/>

    </div>
      </Provider> 

  );
}


// const body = document.querySelector("body");
// const scrollbar = window.innerWidth - body.clientWidth;
// body.setAttribute("style", `--scrollbar: ${scrollbar}px`);
