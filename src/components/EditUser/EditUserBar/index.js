import React from 'react';
// PropTypes
import PropTypes from 'prop-types';
// Material Ui Components
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// Custom styles
import { UserBarStyles as styles } from '../../../styles';

import { observer } from 'mobx-react';

export default observer((props) => {
    const { changeUserInfo, history, form, unicKey, id } = props;

    const handleSubmit = () => {
        changeUserInfo({
            firstName: form.$('firstName').value,
            lastName: form.$('lastName').value,
            nickName: form.$('nickName').value,
            dateOfBirth: form.$('dateOfBirth').value,
            unicKey,
            id
        });

        history.push('/');
    };

    const dateValue = form.$('dateOfBirth').value;
    const datepickerValue = (typeof dateValue === 'string') ? new Date(dateValue) : dateValue;

    form.handleSubmit = handleSubmit;

    return (
        <div>
            <Toolbar style={styles.toolbarStyles}>
                <ToolbarGroup>
                    <div style={styles.toolbarGroupStyle}>
                        <TextField
                            {...form.$('firstName').bind()}
                            errorText={form.$('firstName').error}
                            hintText="Write your first name"
                            floatingLabelText="Frist Name"
                            errorStyle={styles.errorStyle}
                        />
                    </div>
                </ToolbarGroup>
                <ToolbarGroup>
                    <div style={styles.toolbarGroupStyle}>
                        <TextField
                            {...form.$('lastName').bind()}
                            errorText={form.$('lastName').error}
                            hintText="Write your last name here ..."
                            floatingLabelText="Last name"
                            errorStyle={styles.errorStyle}
                        />
                    </div>
                </ToolbarGroup>
                <ToolbarGroup>
                    <div style={styles.toolbarGroupStyle}>
                        <TextField
                            {...form.$('nickName').bind()}
                            errorText={form.$('nickName').error}
                            hintText="Write your nick-name here ..."
                            floatingLabelText="Nick-name"
                            errorStyle={styles.errorStyle}
                        />
                    </div>
                </ToolbarGroup>
                <ToolbarGroup>
                    <div style={styles.datepickerWrapper}>
                        <DatePicker
                            {...form.$('dateOfBirth').bind()}
                            value={datepickerValue}
                            errorText={form.$('dateOfBirth').error}
                            hintText="Open to Year"
                            openToYearSelection={true}
                            errorStyle={styles.errorStyle}
                        />
                    </div>
                </ToolbarGroup>
                <ToolbarGroup>
                    <RaisedButton label="Confirm" primary={true} onClick={form.onSubmit} />
                </ToolbarGroup>
            </Toolbar>
        </div>
    );
});

observer.PropTypes = {
    changeUserInfo: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,
    unicKey: PropTypes.string.isRequired,
    id: PropTypes.object.isRequired
};
