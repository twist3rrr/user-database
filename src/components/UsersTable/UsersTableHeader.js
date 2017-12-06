import React from 'react';
// PropTypes
import PropTypes from 'prop-types';
// Material UI components
import {
    TableHeaderColumn,
    TableRow
} from 'material-ui/Table';
// Constants
import { SORTING_USER_LIST_TYPES } from '../../constants';
// Custom styles
import { UsersTableHeaderStyles as styles } from '../../styles';

export default function UsersTableHeader(props) {
    const { changeSortingType } = props;
    const { SortingBlockStyles, AddColumnStyles } = styles;

    return (
        <TableRow>
            <TableHeaderColumn><span style={SortingBlockStyles} role="presentation" onClick={() => changeSortingType(SORTING_USER_LIST_TYPES.BY_ID, 'sortingType')}>ID ⇵</span></TableHeaderColumn>
            <TableHeaderColumn><span style={SortingBlockStyles} role="presentation" onClick={() => changeSortingType(SORTING_USER_LIST_TYPES.BY_FIRST_NAME, 'sortingType')}>First Name ⇵</span></TableHeaderColumn>
            <TableHeaderColumn><span style={SortingBlockStyles} role="presentation" onClick={() => changeSortingType(SORTING_USER_LIST_TYPES.BY_LAST_NAME, 'sortingType')}>Last Name ⇵</span></TableHeaderColumn>
            <TableHeaderColumn><span style={SortingBlockStyles} role="presentation" onClick={() => changeSortingType(SORTING_USER_LIST_TYPES.BY_NICK_NAME, 'sortingType')}>Nick Name ⇵</span></TableHeaderColumn>
            <TableHeaderColumn><span style={SortingBlockStyles} role="presentation" onClick={() => changeSortingType(SORTING_USER_LIST_TYPES.BY_BIRTH_DATE, 'sortingType')}>Date of Birth ⇵</span></TableHeaderColumn>
            <TableHeaderColumn />
            <TableHeaderColumn style={AddColumnStyles} />
        </TableRow>
    );
}

UsersTableHeader.PropTypes = {
    changeSortingType: PropTypes.func.isRequired
};
