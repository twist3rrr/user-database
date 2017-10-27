import { ADD_USER, DELETE_USER, CHANGE_USER_INFO } from './../../constants';
// Thunk could be useed here

// export function changeUserInfo(user) {
//     return dispatch => {
//         dispatch({
//             type: CHANGE_USER_INFO,
//             payload: {
//                 user
//             }
//         });
//     };
// }

export function addUser(user) {
    return {
        type: ADD_USER,
        payload: {
            user
        }
    };
}

export function deleteUser(id) {
    return {
        type: DELETE_USER,
        payload: {
            id
        }
    };
}

export function changeUserInfo(user) {
    return {
        type: CHANGE_USER_INFO,
        payload: {
            user
        }
    };
}
