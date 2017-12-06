import React from 'react';
// PropTypes
import PropTypes from 'prop-types';
// React Router Dom Link
import { Link } from 'react-router-dom';
// SVG
import ReactSVG from 'react-svg';
// Custom styles
import { UsersTableRowStyles as styles } from '../../styles';
// Material UI components
import {
    TableRow,
    TableRowColumn
    } from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
// Helper functions
import { convertDateFromUtcString } from '../../helpers';


export default function UsersTableRow(props) {
    const { user, deleteUser } = props;
    const { LastColumnStyles, FloatingActionButtonStyles, ContentAddStyles, ActionButtonColumnStyles, LinkSvgStyles } = styles;

    return (
        <TableRow key={user.unicKey} selectable={false}>
            <TableRowColumn>{user.id}</TableRowColumn>
            <TableRowColumn>{user.firstName}</TableRowColumn>
            <TableRowColumn>{user.lastName}</TableRowColumn>
            <TableRowColumn>{user.nickName}</TableRowColumn>
            <TableRowColumn>{convertDateFromUtcString(user.dateOfBirth)}</TableRowColumn>
            <TableRowColumn style={LastColumnStyles}>
                <FloatingActionButton
                    mini={true}
                    style={FloatingActionButtonStyles}
                >
                    <Link to={`/users/${user.id}`}>
                        <ReactSVG
                            path="../../img/svg/edit.svg"
                            style={LinkSvgStyles}
                        />
                    </Link>
                </FloatingActionButton>
            </TableRowColumn>
            <TableRowColumn style={ActionButtonColumnStyles}>
                <FloatingActionButton
                    mini={true}
                    onClick={() => deleteUser(user.unicKey)}
                    secondary={true}
                    style={FloatingActionButtonStyles}
                >
                    <ContentAdd style={ContentAddStyles} />
                </FloatingActionButton>
            </TableRowColumn>
        </TableRow>
    );
}

UsersTableRow.PropTypes = {
    user: PropTypes.object.isRequired,
    deleteUser: PropTypes.func.isRequired
};
