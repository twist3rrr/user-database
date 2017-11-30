import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

export default function() {
    const styles = {
        circularProgress: {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: '0.6'
        },
        circularProgressWrapper: {
            position: 'fixed',
            width: '100%',
            height: '100%',
            zIndex: 10000
        }
    };

    return (
        <div style={styles.circularProgressWrapper}>
            <CircularProgress size={100} thickness={5} style={styles.circularProgress} />
        </div>
    );
}
