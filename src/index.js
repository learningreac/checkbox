import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './App.css';

import { BrowserRouter as Router } from "react-router-dom";
import MovieAPP from './movieapp3.0/MovieAPP';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className='App'>
        <App />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

