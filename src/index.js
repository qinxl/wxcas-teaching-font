import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import BasicRoute from './router/BasicRoute';
import './index.css';

ReactDOM.render(
    <BasicRoute />,
    document.getElementById('root')
);
serviceWorker.unregister();
