import React, { Component } from 'react';
import { connect } from 'react-redux';
// React router
import { Router, Route } from 'react-router-dom';
// Components
import AddUserBar from './AddUserBar';
import UsersTable from './UsersTable';
import EditUser from './EditUser';
import mobxUserBarConfig from './AddUserBar/mobx-form';
// Actions
import { addUser, deleteUser, changeUserInfo } from './../AC/user';
import browserHistory from '../browserHistory';

class App extends Component {
    constructor() {
        super();
        this.state = {

        };
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
                    />
                </div>
            );
        };

        return (
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
    }
}

export default connect((state) => {
    const {
        usersList } = state;

    return {
        usersList: usersList.usersList
    };
}, {
    addUser,
    deleteUser,
    changeUserInfo
})(App);
