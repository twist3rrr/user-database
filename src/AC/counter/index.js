import { COUNTER } from './../../constants';

export default function counter(number) {
    return dispatch => {
        dispatch({
            type: COUNTER,
            payload: {
                counter: number
            }
        });
    };
}
