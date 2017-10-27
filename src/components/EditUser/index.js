import React from 'react';
// Components
import EditUserBar from './EditUserBar';
// Helpers
import { findUserById } from '../../helpers';

export default function EditUser(props) {
    const { userId, usersList, defaultChangeHandler, changeUserInfo } = props;
    const userMatch = findUserById(usersList, userId).user;

    return <EditUserBar currentUserData={userMatch} changeUserInfo={changeUserInfo} defaultChangeHandler={defaultChangeHandler} />;
}
