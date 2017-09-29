import React, { Component } from 'react';

import {
        Table,
        TableBody,
        TableHeader,
        TableHeaderColumn,
        TableRow,
        TableRowColumn } from 'material-ui/Table';

import { DATE_FORMAT } from '../../constants';
import moment from 'moment';

export default class UsersTable extends Component {

    render() {
        const { usersList } = this.props;

        const usersTable = usersList.length ? (
            <Table>
                <TableHeader
                    adjustForCheckbox={false}
                    displaySelectAll={false}
                >
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>First Name</TableHeaderColumn>
                        <TableHeaderColumn>Last Name</TableHeaderColumn>
                        <TableHeaderColumn>Nick Name</TableHeaderColumn>
                        <TableHeaderColumn>Date of birth</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={false}
                    selectable={false}
                >
                {
                    usersList.map((user) => {
                        const formatedDate = moment(Date.parse(user.dateOfBirth)).format(DATE_FORMAT);
                        return (
                            <TableRow key={user.id}>
                                <TableRowColumn>{user.id}</TableRowColumn>
                                <TableRowColumn>{user.firstName}</TableRowColumn>
                                <TableRowColumn>{user.lastName}</TableRowColumn>
                                <TableRowColumn>{user.nickName}</TableRowColumn>
                                <TableRowColumn>{formatedDate}</TableRowColumn>
                            </TableRow>
                        );
                    })
                }
                </TableBody>
            </Table>
        ) : null;

        return usersTable;
    }
}
