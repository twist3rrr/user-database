import React, { Component } from 'react';
import UsersTableRow from './UsersTableRow';
import UsersTableHeader from './UsersTableHeader';
// Custom styles
import { UsersTableStyles as styles } from '../../styles';
// PropTypes
import PropTypes from 'prop-types';
// Material UI components
import {
        Table,
        TableBody,
        TableHeader
    } from 'material-ui/Table';

import Pagination from 'material-ui-pagination';
// Helper function
import { compareFunctions } from '../../helpers';

export default class UsersTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortingType: '',
            activePage: 1,
            elementsOnPage: 6,
            pagesCount: Math.ceil(props.usersList.length / 6)
        };

        this.defaultChangeHandler = props.defaultChangeHandler.bind(this);
    }

    render() {
        const { usersList, deleteUser } = this.props;
        const { elementsOnPage, activePage, pagesCount } = this.state;
        const { TableStyles, PaginationStyles, NoTableTextStyles } = styles;
        const sortedList = (this.state.sortingType && usersList) ? usersList.sort(compareFunctions[this.state.sortingType]) : usersList;

        const usersTable = usersList ? (
            <div style={TableStyles}>
                <Table>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                        <UsersTableHeader changeSortingType={this.defaultChangeHandler} />
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} selectable={false}>
                    {
                        sortedList.map((user, index) => {
                            if (index < activePage * elementsOnPage && index >= (activePage * elementsOnPage) - elementsOnPage) {
                                return <UsersTableRow key={index} user={user} deleteUser={deleteUser} />;
                            }
                            return null;
                        })
                    }
                    </TableBody>
                </Table>
                <Pagination
                    total={pagesCount}
                    current={activePage}
                    styleRoot={PaginationStyles}
                    display={3}
                    onChange={(index) => this.defaultChangeHandler(index, 'activePage')}
                />
            </div>
        ) : <p style={NoTableTextStyles}>There is no users in your list yet</p>;

        return usersTable;
    }
}

UsersTable.PropTypes = {
    usersList: PropTypes.array.isRequired,
    deleteUser: PropTypes.func.isRequired
};
