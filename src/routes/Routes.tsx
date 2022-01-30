import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Dashboard } from "../pages/Dashboard";
import UnderConstruction from "../pages/UnderConstruction/UnderConstruction";

/**
 * Route definition
 */
const Routes: Function = () =>
  <Switch>
    <Route path={'/dashboard'}><Dashboard/></Route>
    <Route path={'/card'}><UnderConstruction title={'Card'}/></Route>
    <Route path={'/settings'}><UnderConstruction title={'Settings'}/></Route>
    <Route path={'/transactions'}><UnderConstruction title={'Transactions'}/></Route>
    <Route path={'/notifications'}><UnderConstruction title={'Notifications'}/></Route>

    <Route path={'/'}><Redirect to={'/dashboard'}/></Route>
  </Switch>

export default Routes;
