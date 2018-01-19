import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import './style/index.css';
import './style/animations.css';
import configureStore from 'redux/configureStore';
import * as firebase from 'firebase';

const store = configureStore();

const config = {
    apiKey: "AIzaSyA-iJfxvYXK-QpQOBDmViIm6N2KPkLeyj4",
    authDomain: "mandalart-91.firebaseapp.com",
    databaseURL: "https://mandalart-91.firebaseio.com",
    projectId: "mandalart-91",
    storageBucket: "mandalart-91.appspot.com",
    messagingSenderId: "1057861341206"
}

firebase.initializeApp(config);

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();
