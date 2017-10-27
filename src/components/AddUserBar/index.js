import React, { Component } from 'react';
// Material Ui components
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const initialUserData = {
    firstName: '',
    lastName: '',
    nickName: '',
    dateOfBirth: null
};

export default class AddUserBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: initialUserData
        };

        this.toolbarGroupStyle = {
            paddingBottom: 20
        };

        this.defaultChangeHandler = this.props.defaultChangeHandler.bind(this);
        this.addUser = this.addUser.bind(this);
    }

    addUser() {
        const { userData } = this.state;

        this.props.addUser(userData);
        this.setState({
            userData: initialUserData
        });
    }

    render() {
        return (
            <div>
                <Toolbar>
                    <ToolbarGroup>
                        <div style={this.toolbarGroupStyle}>
                            <TextField
                                hintText="Write your first name here ..."
                                floatingLabelText="First name"
                                value={this.state.userData.firstName}
                                onChange={(e) => { this.defaultChangeHandler(e.target.value, 'userData', 'firstName'); }}
                            />
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div style={this.toolbarGroupStyle}>
                            <TextField
                                hintText="Write your last name here ..."
                                floatingLabelText="Last name"
                                value={this.state.userData.lastName}
                                onChange={(e) => { this.defaultChangeHandler(e.target.value, 'userData', 'lastName'); }}
                            />
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div style={this.toolbarGroupStyle}>
                            <TextField
                                hintText="Write your nick-name here ..."
                                floatingLabelText="Nick-name"
                                value={this.state.userData.nickName}
                                onChange={(e) => { this.defaultChangeHandler(e.target.value, 'userData', 'nickName'); }}
                            />
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <DatePicker
                            hintText="Open to Year"
                            openToYearSelection={true}
                            value={this.state.userData.dateOfBirth}
                            onChange={(e, date) => { this.defaultChangeHandler(date, 'userData', 'dateOfBirth'); }}
                        />
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <FloatingActionButton
                            mini={true}
                            onClick={() => this.addUser()}
                        >
                            <ContentAdd />
                        </FloatingActionButton>
                    </ToolbarGroup>
                </Toolbar>
            </div>
        );
    }
}
