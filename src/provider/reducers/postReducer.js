import ActionTypes from '../../utils/ActionTypes';

const initialState = {
    items: [],
    item: {}
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case ActionTypes.NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}

export default postReducer;
