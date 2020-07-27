import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Characters from '../pages/Characters';
import Dashboard from '../pages/Dashboard';
import FormEdit from '../pages/FormEdit';

const Routes = () => (
  <Switch>
    <Route component={Dashboard} exact path='/' />
    <Route component={Characters} path='/characters/:id/series' />
    <Route component={FormEdit} path='/characters/:id/edit' />
  </Switch>
);

export default Routes;
