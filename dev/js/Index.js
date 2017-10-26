import React , {Component} from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './Components/App';

import AllReducers from './Reducers/index';

const store = createStore(AllReducers);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,document.getElementById('root'));