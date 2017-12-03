import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import './style/index.css';
import './style/animations.css';
import configureStore from 'redux/configureStore';

const store = configureStore();

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();
