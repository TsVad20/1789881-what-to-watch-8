import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { authInfo } from './mocks/auth-info';
import { comments } from './mocks/comments';
import { films } from './mocks/films';

ReactDOM.render(
  <React.StrictMode>
    <App
      films = {films}
      authInfo = {authInfo}
      comments = {comments}
    />
  </React.StrictMode>,
  document.getElementById('root'));
