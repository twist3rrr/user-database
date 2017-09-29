import { GET_USERS, ADD_USER } from './../../constants';

const defaultState = {
    usersList: [
        {
            id: 1,
            firstName: 'Василь',
            lastName: 'Божий',
            nickName: 'VasVas',
            dateOfBirth: 'Sat Sep 29 2018 14:17:21 GMT+0200 (Central Europe Daylight Time)'
        },
        {
            id: 2,
            firstName: 'Ержiя',
            lastName: 'Бiгарь',
            nickName: 'Jorge',
            dateOfBirth: 'Sat Sep 29 2018 14:17:21 GMT+0200 (Central Europe Daylight Time)'
        },
        {
            id: 3,
            firstName: 'Пiшта',
            lastName: 'Мацур',
            nickName: 'Jorge',
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
            const user = payload.user;

            user.id = state.usersList.length + 1;
            newUsersList.push(user);

            return {
                ...state,
                usersList: newUsersList

            };
        default:
            return state;
    }
}
