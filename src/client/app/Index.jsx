import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter} from 'react-router-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import App from "./App";

import {MuiThemeProvider} from 'material-ui/styles';

import {Provider} from 'react-redux';
import reducers from './reducers';

import axios from "axios";

import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';

//react-tap-event-pl`ugin provides onTouchTap() to all React Components.
// It's a mobile-friendly onClick() alternative for components in Material-UI, especially useful for the buttons.
injectTapEventPlugin();

/**
 * Set global setting for Axios
 * https://github.com/mzabriskie/axios
 */
axios.defaults.baseURL = process.env.ENV.API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <MuiThemeProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>, document.getElementById('root'));