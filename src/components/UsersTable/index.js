import React, { Component } from 'react';
// React Router Dom Link
import { Link } from 'react-router-dom';
// Material UI components
import {
        Table,
        TableBody,
        TableHeader,
        TableHeaderColumn,
        TableRow,
        TableRowColumn } from 'material-ui/Table';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ReactSVG from 'react-svg';
// Helper function
import { convertDateFromUtcString, compareFunctions } from '../../helpers';
// Constants
import { SORTING_USER_LIST_TYPES } from '../../constants';

export default class UsersTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortingType: ''
        };

        this.stateSetValue = this.stateSetValue.bind(this);
        this.SortingBlockStyle = {
            display: 'block',
            cursor: 'pointer'
        };
    }

    stateSetValue(prop, value) {
        this.setState({
            [prop]: value
        });
    }

    render() {
        const {
                usersList,
                deleteUser
        } = this.props;

        const sortedList = (this.state.sortingType && usersList.length) ? usersList.sort(compareFunctions[this.state.sortingType]) : usersList;

        const usersTable = usersList.length ? (
            <Table>
                <TableHeader
                    adjustForCheckbox={false}
                    displaySelectAll={false}
                >
                    <TableRow>
                        <TableHeaderColumn><span style={this.SortingBlockStyle} role="presentation" onClick={() => this.stateSetValue('sortingType', SORTING_USER_LIST_TYPES.BY_ID)}>ID ⇵</span></TableHeaderColumn>
                        <TableHeaderColumn><span style={this.SortingBlockStyle} role="presentation" onClick={() => this.stateSetValue('sortingType', SORTING_USER_LIST_TYPES.BY_FIRST_NAME)}>First Name ⇵</span></TableHeaderColumn>
                        <TableHeaderColumn><span style={this.SortingBlockStyle} role="presentation" onClick={() => this.stateSetValue('sortingType', SORTING_USER_LIST_TYPES.BY_LAST_NAME)}>Last Name ⇵</span></TableHeaderColumn>
                        <TableHeaderColumn><span style={this.SortingBlockStyle} role="presentation" onClick={() => this.stateSetValue('sortingType', SORTING_USER_LIST_TYPES.BY_NICK_NAME)}>Nick Name ⇵</span></TableHeaderColumn>
                        <TableHeaderColumn><span style={this.SortingBlockStyle} role="presentation" onClick={() => this.stateSetValue('sortingType', SORTING_USER_LIST_TYPES.BY_BIRTH_DATE)}>Date of Birth ⇵</span></TableHeaderColumn>
                        <TableHeaderColumn
                            style={{
                                width: 20
                            }}
                        />
                        <TableHeaderColumn
                            style={{
                                width: 50
                            }}
                        />
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={false}
                    selectable={false}
                >
                {
                    sortedList.map((user) => {
                        return (
                            <TableRow key={user.id} selectable={false}>
                                <TableRowColumn>{user.id}</TableRowColumn>
                                <TableRowColumn>{user.firstName}</TableRowColumn>
                                <TableRowColumn>{user.lastName}</TableRowColumn>
                                <TableRowColumn>{user.nickName}</TableRowColumn>
                                <TableRowColumn>{convertDateFromUtcString(user.dateOfBirth)}</TableRowColumn>
                                <TableRowColumn
                                    style={{
                                        width: 30
                                    }}
                                >
                                    <FloatingActionButton
                                        mini={true}
                                        style={{
                                            float: 'right'
                                        }}
                                    >
                                        <Link to={`/users/${user.id}`}>
                                            <ReactSVG
                                                path="../../img/svg/edit.svg"
                                                style={{
                                                    width: 15,
                                                    height: 40
                                                }}
                                            />
                                        </Link>
                                    </FloatingActionButton>
                                </TableRowColumn>
                                <TableRowColumn
                                    style={{
                                        paddingBottom: 8,
                                        paddingTop: 8,
                                        width: 30
                                    }}
                                >
                                    <FloatingActionButton
                                        mini={true}
                                        onClick={() => deleteUser(user.id)}
                                        secondary={true}
                                        style={{
                                            float: 'right'
                                        }}
                                    >
                                        <ContentAdd
                                            style={{
                                                transform: 'rotate(45deg)'
                                            }}
                                        />
                                    </FloatingActionButton>
                                </TableRowColumn>
                            </TableRow>
                        );
                    })
                }
                </TableBody>
            </Table>
        ) : <p style={{ textAlign: 'center' }}>There is no users in your list yet</p>;

        return usersTable;
    }
}
