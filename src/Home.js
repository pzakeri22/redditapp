import './App.css';
import React from "react";
import Header from './header/Header.js';
import ResultsContainer from './results/ResultsContainer.js';
import './index.css';
import store from './store.js';
import {Provider} from 'react-redux';


export default function Home() {
  return (
    <div className="grid">
      <Header/>
      <ResultsContainer/>
    </div>
  );
}

