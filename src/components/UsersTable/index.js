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
import Pagination from 'material-ui-pagination';
// SVG
import ReactSVG from 'react-svg';
// Helper function
import { convertDateFromUtcString, compareFunctions } from '../../helpers';
// Constants
import { SORTING_USER_LIST_TYPES } from '../../constants';

export default class UsersTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortingType: '',
            activePage: 1,
            elementsOnPage: 6,
            pages: Math.ceil(props.usersList.length / 6)
        };

        this.defaultChangeHandler = props.defaultChangeHandler.bind(this);
        this.SortingBlockStyle = {
            display: 'block',
            cursor: 'pointer'
        };
    }

    render() {
        const {
                usersList,
                deleteUser
        } = this.props;

        const sortedList = (this.state.sortingType && usersList) ? usersList.sort(compareFunctions[this.state.sortingType]) : usersList;

        const usersTable = usersList ? (
            <div style={{ textAlign: 'center' }}>
                <Table>
                    <TableHeader
                        adjustForCheckbox={false}
                        displaySelectAll={false}
                    >
                        <TableRow>
                            <TableHeaderColumn><span style={this.SortingBlockStyle} role="presentation" onClick={() => this.defaultChangeHandler(SORTING_USER_LIST_TYPES.BY_ID, 'sortingType')}>ID ⇵</span></TableHeaderColumn>
                            <TableHeaderColumn><span style={this.SortingBlockStyle} role="presentation" onClick={() => this.defaultChangeHandler(SORTING_USER_LIST_TYPES.BY_FIRST_NAME, 'sortingType')}>First Name ⇵</span></TableHeaderColumn>
                            <TableHeaderColumn><span style={this.SortingBlockStyle} role="presentation" onClick={() => this.defaultChangeHandler(SORTING_USER_LIST_TYPES.BY_LAST_NAME, 'sortingType')}>Last Name ⇵</span></TableHeaderColumn>
                            <TableHeaderColumn><span style={this.SortingBlockStyle} role="presentation" onClick={() => this.defaultChangeHandler(SORTING_USER_LIST_TYPES.BY_NICK_NAME, 'sortingType')}>Nick Name ⇵</span></TableHeaderColumn>
                            <TableHeaderColumn><span style={this.SortingBlockStyle} role="presentation" onClick={() => this.defaultChangeHandler(SORTING_USER_LIST_TYPES.BY_BIRTH_DATE, 'sortingType')}>Date of Birth ⇵</span></TableHeaderColumn>
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
                        sortedList.map((user, index) => {
                            if (index < this.state.activePage * this.state.elementsOnPage && index >= (this.state.activePage * this.state.elementsOnPage) - this.state.elementsOnPage) {
                                return (
                                    <TableRow key={user.unicKey} selectable={false}>
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
                                                onClick={() => deleteUser(user.unicKey)}
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
                            }
                            return null;
                        })
                    }
                    </TableBody>
                </Table>
                <Pagination
                    total={this.state.pages}
                    current={this.state.activePage}
                    styleRoot={{ position: 'fixed', bottom: '15', left: '50%', transform: 'translate(-50%, 0)' }}
                    display={3}
                    onChange={(index) => this.defaultChangeHandler(index, 'activePage')}
                />
            </div>
        ) : <p style={{ textAlign: 'center' }}>There is no users in your list yet</p>;

        return usersTable;
    }
}
