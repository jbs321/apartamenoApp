import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {makeMainRoutes} from "./Routes.jsx";
import axios from 'axios';

const routes = makeMainRoutes();

if(process.env.ENV.API_URL === undefined) {
    throw new Error('API_URL is missing please check .env configuration');
}

//set Axios Default
axios.defaults.baseURL = process.env.ENV.API_URL;
axios.defaults.headers.post['Accept'] = 'application/json, application/x-www-form-urlencoded';

//react-tap-event-plugin provides onTouchTap() to all React Components.
// It's a mobile-friendly onClick() alternative for components in Material-UI, especially useful for the buttons.
injectTapEventPlugin();


ReactDOM.render(
    routes,
    document.getElementById('root')
);

