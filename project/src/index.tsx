import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';
import { AuthorizationStatus } from './const';
import { createAPI } from './services/api';
import thunk from 'redux-thunk';
import { checkAuthAction, fetchFilmsAction } from './store/api-actions';
import { ThunkAppDispatch } from './types/action';
import { requireAuthorization } from './store/action';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api))));

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchFilmsAction());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
