import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import WorkBench from './containers/WorkBench/WorkBench';

ReactDOM.render(
    <WorkBench />
    ,
    document.getElementById('root')
);
serviceWorker.unregister();
