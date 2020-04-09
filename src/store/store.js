import { createStore } from 'redux';
import { AdminReducer } from '../reducers/index';

const store = createStore(AdminReducer);

export default store;
