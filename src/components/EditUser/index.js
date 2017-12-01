import React from 'react';
// Components
import EditUserBar from './EditUserBar';
// Helpers
import { findUserById } from '../../helpers';
// Mob-x form configuration
import configureMobxForEditUserBar from '../EditUser/mobx-form';

export default function EditUser(props) {
    const { userId, usersList, defaultChangeHandler, changeUserInfo } = props;
    const userMatch = findUserById(usersList, userId).user;

    return <EditUserBar {...props} id={userMatch.id} unicKey={userMatch.unicKey} form={configureMobxForEditUserBar(userMatch)} changeUserInfo={changeUserInfo} defaultChangeHandler={defaultChangeHandler} />;
}
