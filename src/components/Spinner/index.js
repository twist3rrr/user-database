import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
// Custom styles
import { SpinnerStyles as styles } from '../../styles';

export default function() {
    return (
        <div style={styles.circularProgressWrapper}>
            <CircularProgress size={100} thickness={5} style={styles.circularProgress} />
        </div>
    );
}
