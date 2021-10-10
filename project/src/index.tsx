import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { films } from './mocks/films';
import { promoFilm } from './mocks/promo-film';

ReactDOM.render(
  <React.StrictMode>
    <App
      promoFilm = {promoFilm}
      films = {films}
    />
  </React.StrictMode>,
  document.getElementById('root'));
