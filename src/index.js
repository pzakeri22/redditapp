import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import store from './store.js';
import {Provider} from 'react-redux';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PostWithCommentsRoute from './postWithCommentsRoute/Container.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>

<BrowserRouter>

<React.StrictMode> 

  <Routes>

    <Route path="/" element={<App />} />
    {/* map each of routes below to what posts are returned from api */}
    <Route path="/PostWithCommentsRoute" element={<PostWithCommentsRoute/>} />
    <Route path="*" element={
        <main style={{ padding: "1rem" }}>
        <p>There's nothing here! Please go back and try again.</p>
      </main>
    } />

  </Routes>

</React.StrictMode>

</BrowserRouter>

 </Provider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
