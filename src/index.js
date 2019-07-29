import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Hello from './components/Hello/Hello'
import MHello from './components/MHello/MHello'

let model = {clicks: 0}

function render() {
    // ReactDOM.render(<App clicks={model.clicks}
    //                      addClick={() => {
    //                          model.clicks += 1; render();
    //                      }}/>, document.getElementById('root'));

    // ReactDOM.render(<Hello date={ new Date().toString() } />, document.getElementById('root'));

    ReactDOM.render(<MHello date={ new Date().toString() } />, document.getElementById('root'));
}

render();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
