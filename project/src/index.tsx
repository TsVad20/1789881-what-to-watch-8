import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { authInfo } from './mocks/auth-info';
import { comments } from './mocks/comments';
import { films } from './mocks/films';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        films = {films}
        authInfo = {authInfo}
        comments = {comments}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
