import React from 'react';
import ReactDOM from 'react-dom';
import {theme} from './config';
import {ThemeProvider} from '@material-ui/core';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import App from './components/app';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Router>
            <Switch>
                <App />
            </Switch>
        </Router>
    </ThemeProvider>,
    document.getElementById('root')
);