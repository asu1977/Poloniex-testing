import { FETCH_POSTS, SET_PAIR } from './types';

export const fetchPosts = () => dispatch => {
    fetch('https://poloniex.com/public?command=returnTicker')
        .then(res => res.json())
        .then(posts => 
            dispatch({
                type: FETCH_POSTS,
                payload: posts
        })
    );
};

export const setPair = pair => dispatch =>{
    dispatch ({
        type: SET_PAIR,
        payload: pair
    })
}