import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { authInfo } from './mocks/auth-info';
import { films } from './mocks/films';
import { promoFilm } from './mocks/promo-film';
import { video } from './mocks/video';

ReactDOM.render(
  <React.StrictMode>
    <App
      promoFilm = {promoFilm}
      films = {films}
      video = {video}
      authInfo = {authInfo}
    />
  </React.StrictMode>,
  document.getElementById('root'));
