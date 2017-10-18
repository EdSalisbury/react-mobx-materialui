import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PersonList from './PersonList';
import PersonDetail from './PersonDetail';

const PersonRouter = () => (
    <Switch>
        <Route exact path="/persons" component={PersonList}/>
        <Route path="/persons/:name" component={PersonDetail}/>
    </Switch>
);

export default PersonRouter;