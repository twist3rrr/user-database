import { FETCH_USERS_LIST, SUCCESS } from './../../constants';

const defaultState = {
    usersList: []
};

export default function usersList(state = defaultState, action = {}) {
    const { type, payload } = action;

    switch (type) {

        case FETCH_USERS_LIST: {
            return {
                ...state,
                isLoading: payload.isLoading
            };
        }

        case FETCH_USERS_LIST + SUCCESS:
            return {
                ...state,
                usersList: payload.usersList,
                isLoading: payload.isLoading
            };

        default:
            return state;
    }
}
