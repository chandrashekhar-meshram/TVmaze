import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShowsState from './context/shows/ShowsState';
import AlertState from './context/alerts/AlertState';

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShowsState>
    <AlertState>
      <App />
    </AlertState>    
  </ShowsState>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
