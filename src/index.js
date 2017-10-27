import React from 'react';
import ReactDOM from 'react-dom';
// App component
import App from './components/App';
// Redux provider component
import { Provider } from 'react-redux';
// Store
import store from './store';
// Because error connected with validation component in IE
import 'babel-polyfill';
// Material UI theme provider
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
