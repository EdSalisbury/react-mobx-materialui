import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Persons from '../persons/PersonRouter';

const Main = () => (
    <main>
        <Switch>
            <Route path="/persons" component={Persons} />
        </Switch>
    </main>
);

export default Main;