import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import './App.css';

import { BrowserRouter as Router } from "react-router-dom";

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

