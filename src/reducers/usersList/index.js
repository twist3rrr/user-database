import { GET_USERS, ADD_USER, DELETE_USER, CHANGE_USER_INFO } from './../../constants';
import { randomId, findUserById } from '../../helpers';

const defaultState = {
    usersList: [
        {
            id: '587336275748656',
            firstName: 'Nick',
            lastName: 'Bolton',
            nickName: 'nikky',
            dateOfBirth: 'Sat Sep 29 2018 14:17:21 GMT+0200 (Central Europe Daylight Time)'
        },
        {
            id: '587336275748652',
            firstName: 'Jack',
            lastName: 'Pirson',
            nickName: 'j@kky',
            dateOfBirth: 'Sat Sep 29 2018 14:17:21 GMT+0200 (Central Europe Daylight Time)'
        },
        {
            id: '587336275748657',
            firstName: 'Piter',
            lastName: 'Larson',
            nickName: 'p!t',
            dateOfBirth: 'Sat Sep 29 2018 14:17:21 GMT+0200 (Central Europe Daylight Time)'
        }
    ]
};

export default function usersList(state = defaultState, action = {}) {
    const { type, payload } = action;

    switch (type) {
        case GET_USERS:
            return {
                ...state,
                usersList: payload.usersList
            };

        case ADD_USER:
            const newUsersList = state.usersList.slice();
            const user = Object.assign({}, payload.user);

            user.id = randomId();
            newUsersList.push(user);
            return {
                ...state,
                usersList: newUsersList
            };

        case DELETE_USER:
            const filteredUserList = state.usersList.filter((user) => {
                return user.id !== payload.id;
            });

            return {
                ...state,
                usersList: filteredUserList
            };

        case CHANGE_USER_INFO:
            const { id } = payload.user;
            const newUser = Object.assign({}, payload.user);
            const userIndex = findUserById(state.usersList, id).index;
            const ListAfterChangeUserData = [
                ...state.usersList.slice(0, userIndex),
                newUser,
                ...state.usersList.slice(userIndex + 1),
            ];

            return {
                ...state,
                usersList: ListAfterChangeUserData
            };

        default:
            return state;
    }
}
