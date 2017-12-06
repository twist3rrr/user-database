import React from 'react';
import PropTypes from 'prop-types';
// Components
import EditUserBar from './EditUserBar';
// Helpers
import { findUserById } from '../../helpers';
// Mob-x form configuration
import configureMobxForEditUserBar from '../EditUser/mobx-form';

export default function EditUser(props) {
    const { userId, usersList } = props;
    const userMatch = findUserById(usersList, userId).user;

    return (<EditUserBar
        {...props}
        id={userMatch.id}
        unicKey={userMatch.unicKey}
        form={configureMobxForEditUserBar(userMatch)}
    />);
}

EditUser.PropTypes = {
    userId: PropTypes.string.isRequired,
    usersList: PropTypes.string.isRequired
};
