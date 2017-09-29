import React, { Component } from 'react';
import { connect } from 'react-redux';


// COMPONENTS
import AddUserBar from './AddUserBar';
import UsersTable from './UsersTable';

// UI COMPONENTS
import RaisedButton from 'material-ui/RaisedButton';

// ACTIONS
import addUser from './../AC/user';
import counter from './../AC/counter';


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
        const { counterValue,
                counter,
                usersList,
                addUser } = this.props;

        return (
            <div>
                <AddUserBar
                    defaultChangeHandler={this.defaultChangeHandler}
                    addUser={addUser}
                />
                <UsersTable usersList={usersList} />
                <h1>{counterValue}</h1>
                <RaisedButton onClick={() => counter(1)} primary={true} label="INCREMENT" />
            </div>
        );
    }
}

export default connect((state) => {
    const {
        counter,
        usersList } = state;

    return {
        counterValue: counter.counter,
        usersList: usersList.usersList
    };
}, {
    counter,
    addUser
})(App);
