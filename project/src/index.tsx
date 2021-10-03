import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  NAME: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  RELEASED: '2014',
};

ReactDOM.render(
  <React.StrictMode>
    <App
      name = {Settings.NAME}
      genre = {Settings.GENRE}
      released = {Settings.RELEASED}
    />
  </React.StrictMode>,
  document.getElementById('root'));
