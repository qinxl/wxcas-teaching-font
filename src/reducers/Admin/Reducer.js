import ActionTypes from './ActionTypes';
const initialState = {
    number: 0
};
const adminReducer = (state = initialState, action) => {
    let { number } = state;
    let { payload } = action;
    switch (action.type) {
        case ActionTypes.ADD: {
            return { number: number + payload.number };
        }
        case ActionTypes.LESS: {
            return { number: number - 1 };
        }
        default: return state;
    }
};
export default adminReducer;