import { FETCH_USERS_LIST, SUCCESS } from './../../constants';
import { firebaseApp } from './../../firebase';
import { randomId } from '../../helpers';

const usersListRef = firebaseApp.database().ref().child('usersList');

export function fetchUsersList() {
    return dispatch => {
        dispatch({
            type: FETCH_USERS_LIST,
            payload: {
                isLoading: true
            }
        });

        usersListRef.on('value', snap => {
            dispatch({
                type: FETCH_USERS_LIST + SUCCESS,
                payload: {
                    usersList: snap.val(),
                    isLoading: false
                }
            });
        });
    };
}

export function addUser(user) {
    return dispatch => {
        user.id = randomId();
        user.dateOfBirth = user.dateOfBirth.toString();
        usersListRef.push(user);
    };
}

export function deleteUser(key) {
    return dispatch => {
        usersListRef.child(key).remove();
    };
}

export function changeUserInfo(user) {
    const { unicKey } = user;
    delete user.unicKey;

    return dispatch => {
        firebaseApp.database().ref(`usersList/${unicKey}`).update(user);
    };

}
