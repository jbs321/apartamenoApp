import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {makeMainRoutes} from "./Routes.jsx";
import axios from "axios";


/**
 * Set global setting for Axios
 * https://github.com/mzabriskie/axios
 */
axios.defaults.baseURL = process.env.ENV.API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const routes = makeMainRoutes();

//react-tap-event-plugin provides onTouchTap() to all React Components.
// It's a mobile-friendly onClick() alternative for components in Material-UI, especially useful for the buttons.
injectTapEventPlugin();


ReactDOM.render(
    routes,
    document.getElementById('root')
);

