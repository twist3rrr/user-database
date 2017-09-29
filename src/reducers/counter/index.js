import { COUNTER } from './../../constants';

const defaultState = {
    counter: 0
};

export default function counter(state = defaultState, action = {}) {
    const { type, payload } = action;

    switch (type) {
        case COUNTER:
            return {
                ...state,
                counter: state.counter + payload.counter
            };
        default:
            return state;
    }
}
