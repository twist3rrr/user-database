import { ADD_USER } from './../../constants';

export default function user(user) {
    return dispatch => {
        dispatch({
            type: ADD_USER,
            payload: {
                user
            }
        });
    };
}
