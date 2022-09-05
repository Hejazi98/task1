import React from "react";
import { Route, Switch } from "react-router-dom";

import { Managment } from "./managment";
import { AddEdit } from "./addEdit";
import { Details } from "./details";

function Heros({ match }) {
  const { path } = match;

  return (
    <Switch>
      <Route exact path={`${path}/`} component={Managment} />
      <Route path={`${path}/add`} component={AddEdit} />
      <Route path={`${path}/details/:id`} component={Details} />
      <Route path={`${path}/edit/:id`} component={AddEdit} />
    </Switch>
  );
}

export { Heros };
