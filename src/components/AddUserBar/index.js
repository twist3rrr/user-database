import React from 'react';
// Material Ui components
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
// Mobx observer
import { observer } from 'mobx-react';

export default observer((props) => {
    const styles = {
        toolbarGroupStyle: {
            paddingBottom: 35,
            paddingTop: 5
        },
        errorStyle: {
            position: 'absolute',
            bottom: -10
        },
        toolBarStyles: {
            height: 70
        },
        datepickerWrapper: {
            marginTop: -5
        }
    };

    const { form, addUser } = props;

    const handleSubmit = () => {
        addUser({
            firstName: form.$('firstName').value,
            lastName: form.$('lastName').value,
            nickName: form.$('nickName').value,
            dateOfBirth: form.$('dateOfBirth').value
        });

        form.$('firstName').clear();
        form.$('lastName').clear();
        form.$('nickName').clear();
        form.$('dateOfBirth').clear();
    };

    form.handleSubmit = handleSubmit;

    return (
        <form>
            <Toolbar style={styles.toolBarStyles}>
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
                            value={form.$('dateOfBirth').value || null}
                            errorText={form.$('dateOfBirth').error}
                            hintText="Open to Year"
                            openToYearSelection={true}
                            errorStyle={styles.errorStyle}
                        />
                    </div>
                </ToolbarGroup>
                <ToolbarGroup>
                    <FloatingActionButton
                        mini={true}
                        onClick={form.onSubmit}
                    >
                        <ContentAdd />
                    </FloatingActionButton>
                </ToolbarGroup>
            </Toolbar>
        </form>
    );
});

