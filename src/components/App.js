import React, { Component } from 'react';
import { connect } from 'react-redux';
// React router
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Components
import AddUserBar from './AddUserBar';
import UsersTable from './UsersTable';
import EditUser from './EditUser';
// Actions
import { addUser, deleteUser, changeUserInfo } from './../AC/user';

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
            <Router>
                <div>
                    <Route exact path="/" component={userEditPage} />
                    <Route
                        path="/users/:userId"
                        render={({ match }) => {
                            return <EditUser userId={match.params.userId} changeUserInfo={changeUserInfo} usersList={usersList} defaultChangeHandler={this.defaultChangeHandler} />;
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
