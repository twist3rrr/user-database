import React, { Component } from 'react';
// Material Ui Components
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// React router components
import { Link } from 'react-router-dom';

export default class AddUserBar extends Component {
    constructor(props) {
        super(props);
        const userData = props.currentUserData;
        userData.dateOfBirth = userData.dateOfBirth ? new Date(userData.dateOfBirth) : null;
        this.state = {
            userData
        };

        this.toolbarGroupStyle = {
            paddingBottom: 20
        };

        this.defaultChangeHandler = this.props.defaultChangeHandler.bind(this);
    }

    render() {
        const { changeUserInfo } = this.props;
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
                        <Link to="/">
                            <RaisedButton label="Go to list" secondary={true} />
                        </Link>
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <RaisedButton label="Confirm" primary={true} onClick={() => changeUserInfo(this.state.userData)} />
                    </ToolbarGroup>
                </Toolbar>
            </div>
        );
    }
}
