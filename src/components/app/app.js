import React from 'react';
import LandingPage from '../../containers/LandingPage/LandingPage';
import { Route }from 'react-router';

import { AppGeneratingForm } from '../pages';

const App = () => {
    return (
        <div>
            <Route exact path="/">
                <LandingPage/>
            </Route>
            <AppGeneratingForm/>
        </div>
    );
};

export default App;