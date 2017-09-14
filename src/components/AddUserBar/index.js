import React, { Component } from 'react';

import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default class AddUserBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            nickName: '',
            dateOfBirth: null
        };

        this.toolbarGroupStyle = {
            paddingBottom: 20
        };

        this.defaultChangeHandler = this.props.defaultChangeHandler.bind(this);
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
                                value={this.state.firstName}
                                onChange={(e) => { this.defaultChangeHandler('firstName', e.target.value); }}
                            />
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div style={this.toolbarGroupStyle}>
                            <TextField
                                hintText="Write your last name here ..."
                                floatingLabelText="Last name"
                                value={this.state.lastName}
                                onChange={(e) => { this.defaultChangeHandler('lastName', e.target.value); }}
                            />
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <div style={this.toolbarGroupStyle}>
                            <TextField
                                hintText="Write your nick-name here ..."
                                floatingLabelText="Nick-name"
                                value={this.state.nickName}
                                onChange={(e) => { this.defaultChangeHandler('nickName', e.target.value); }}
                            />
                        </div>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <DatePicker
                            hintText="Open to Year"
                            openToYearSelection={true}
                            value={this.state.dateOfBirth}
                            onChange={(e, date) => { this.defaultChangeHandler('dateOfBirth', date); }}
                        />
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <FloatingActionButton mini={true}>
                            <ContentAdd />
                        </FloatingActionButton>
                    </ToolbarGroup>
                </Toolbar>
            </div>
        );
    }
}
