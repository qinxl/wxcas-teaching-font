import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import BasicRoute from './router/BasicRoute';
import store from './store/store';
import { Provider } from 'react-redux';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <BasicRoute />
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
