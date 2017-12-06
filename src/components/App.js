import React, { Component } from 'react';
import { connect } from 'react-redux';
// React router
import { Router, Route } from 'react-router-dom';
// Components
import Spinner from './Spinner';
import AddUserBar from './AddUserBar';
import UsersTable from './UsersTable';
import EditUser from './EditUser';
// Mob-X form configurations
import mobxUserBarConfig from './AddUserBar/mobx-form';
// Actions
import { addUser, deleteUser, changeUserInfo, fetchUsersList } from './../AC/user';
// History
import browserHistory from '../browserHistory';
// Helpers
import { arrayFromObj } from '../helpers';
// PropTypes
import PropTypes from 'prop-types';

class App extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    componentDidMount() {
        this.props.fetchUsersList();
    }

    defaultChangeHandler(value, statePropName, stateSecondLevelName) {
        if (stateSecondLevelName) {
            this.setState({
                ...this.state,
                [statePropName]: {
                    ...this.state[statePropName],
                    [stateSecondLevelName]: value
                }
            });
        } else {
            this.setState({
                [statePropName]: value
            });
        }
    }

    render() {
        const {
                usersList,
                isLoading,
                addUser,
                deleteUser,
                changeUserInfo
            } = this.props;

        const userEditPage = () => {
            return (
                <div>
                    <AddUserBar
                        defaultChangeHandler={this.defaultChangeHandler}
                        form={mobxUserBarConfig}
                        addUser={addUser}
                    />
                    <UsersTable
                        usersList={usersList}
                        deleteUser={deleteUser}
                        defaultChangeHandler={this.defaultChangeHandler}
                    />
                </div>
            );
        };

        const mainLayout = isLoading ? <Spinner /> :
            (
                <Router history={browserHistory}>
                    <div>
                        <Route exact path="/" component={userEditPage} />
                        <Route
                            path="/users/:userId"
                            render={({ match }) => {
                                return <EditUser history={browserHistory} userId={match.params.userId} changeUserInfo={changeUserInfo} usersList={usersList} defaultChangeHandler={this.defaultChangeHandler} />;
                            }}
                        />
                    </div>
                </Router>
            );

        return mainLayout;
    }
}

export default connect((state) => {
    const { usersList } = state;

    return {
        usersList: arrayFromObj(usersList.usersList),
        isLoading: usersList.isLoading
    };
}, {
    addUser,
    deleteUser,
    changeUserInfo,
    fetchUsersList
})(App);

App.PropTypes = {
    addUser: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    changeUserInfo: PropTypes.func.isRequired,
    fetchUsersList: PropTypes.func.isRequired,
    usersList: PropTypes.object,
    isLoading: PropTypes.bool.isRequired
};
