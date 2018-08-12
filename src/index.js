import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import createSagaMiddleware from 'redux-saga';


import 'jquery/dist/jquery.js';
import 'popper.js/dist/esm/popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
const sagaMiddleware = createSagaMiddleware();
ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(ReduxPromise, sagaMiddleware))}>
    <App />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
