import ActionTypes from './ActionTypes';
export default {
    add: (number) => ({ type: ActionTypes.ADD, payload: { number } }),
    less: () => ({ type: ActionTypes.LESS }),
};
