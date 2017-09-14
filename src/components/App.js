import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddUserBar from './AddUserBar';
import counter from '../AC/counter';
import RaisedButton from 'material-ui/RaisedButton';


class App extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    defaultChangeHandler(statePropName, value) {
        this.setState({
            [statePropName]: value
        });
    }

    render() {
        const { counterValue, counter } = this.props;
        return (
            <div>
                <AddUserBar
                    defaultChangeHandler={this.defaultChangeHandler}
                />
                <h1>{counterValue}</h1>
                <RaisedButton onClick={() => counter(1)} primary={true} label="INCREMENT" />
            </div>
        );
    }
}

export default connect((state) => {
    const { counter } = state.counter;

    return {
        counterValue: counter
    };
}, {
    counter
})(App);
