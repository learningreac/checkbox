import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import BingmapAPP from './BingmapAPP';
import MovieAPP from './movieapp3.0/MovieAPP';
import MovieProvider  from './movieapp3.0/MovieProvider';


ReactDOM.render(
  <React.StrictMode>
    <MovieProvider>
      <MovieAPP />
    </MovieProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

