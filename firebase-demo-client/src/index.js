import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase, { FirebaseContext } from './firebase/firebaseContext';
require('dotenv').config();

ReactDOM.render(
  // works kind of like the store provider, initalize it once and pass it to all child components
  <FirebaseContext.Provider value={firebase}>
    <App />
  </FirebaseContext.Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
