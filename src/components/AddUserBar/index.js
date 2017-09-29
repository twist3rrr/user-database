import React, { Component } from 'react';

import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default class AddUserBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {
                firstName: '',
                lastName: '',
                nickName: '',
                dateOfBirth: null
            },
            lastUserData: {}
        };

        this.toolbarGroupStyle = {
            paddingBottom: 20
        };

        this.defaultChangeHandler = this.props.defaultChangeHandler.bind(this);
        this.addUser = this.addUser.bind(this);
    }

    addUser() { // TODO: Toaster notification ERROR
        const { userData, lastUserData } = this.state;
        if (userData === lastUserData) {
            console.log('Same Data');
        } else {
            this.props.addUser(this.state.userData);
            this.setState({
                lastUserData: userData
            });
        }
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
