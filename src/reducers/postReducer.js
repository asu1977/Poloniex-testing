import { FETCH_POSTS, SET_PAIR } from '../actions/types';

const initialState = {
    items: [],
    pair: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case SET_PAIR:
            return {
                ...state,
                pair: action.payload
            };
        default: 
            return state;
    }
}