import React from 'react';
import ReactDOM from 'react-dom';
import App from './components';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose  } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

var firebaseConfig = {
    apiKey: "AIzaSyBScDBqf8mtDfYBD0HXL7ZP9EZEWgE9u7k",
    authDomain: "addressinvietname.firebaseapp.com",
    databaseURL: "https://addressinvietname.firebaseio.com",
    projectId: "addressinvietname",
    storageBucket: "addressinvietname.appspot.com",
    messagingSenderId: "538614822514",
    appId: "1:538614822514:web:e6023a4473112add64b4eb",
    measurementId: "G-LX622CYQFH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const store = createStore(rootReducer, compose(
    applyMiddleware(thunk)
    ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

    )

ReactDOM.render(
  <Provider store={store}>
    <App/>

  </Provider>
,document.getElementById('root'));
