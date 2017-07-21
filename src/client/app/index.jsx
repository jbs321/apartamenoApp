import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {makeMainRoutes} from "./Routes.jsx";

const routes = makeMainRoutes();

//react-tap-event-plugin provides onTouchTap() to all React Components.
// It's a mobile-friendly onClick() alternative for components in Material-UI, especially useful for the buttons.
injectTapEventPlugin();


ReactDOM.render(
    routes,
    document.getElementById('root')
);

