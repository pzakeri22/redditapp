import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import WithComments from './postWithCommentsRoute/Container.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>

    <React.StrictMode> 

      <Routes>
        <Route path="/" element={<App />} />
        {/* map each of routes below to what posts are returned from api */}
        <Route path="WithComments" element={<WithComments />} />
        <Route path="*" element={
            <main style={{ padding: "1rem" }}>
            <p>There's nothing here! Please go back and try again.</p>
          </main>
        } />
      </Routes>

    </React.StrictMode>

  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
