import React from 'react';
import ReactDOM from 'react-dom';
import BasicRoute from './router/BasicRoute';
import * as serviceWorker from './serviceWorker';

import './index.css';

ReactDOM.render(<BasicRoute />, document.getElementById('root'));
serviceWorker.unregister();
