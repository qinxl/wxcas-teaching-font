import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import BasicRoute from './Router/BasicRoute';

ReactDOM.render(
    <BasicRoute />,
    document.getElementById('root')
);
serviceWorker.unregister();
