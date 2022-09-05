import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import { Nav, Alert } from "@/_components";
import { Heros } from "@/heros";
import { Home } from "@/home";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="app-container bg-light">
      <Nav />
      <Alert />
      <div className="container pt-4 pb-4">
        <Switch>
          <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
          <Route exact path="/" component={Home} />
          <Route path="/heros" component={Heros} />
        </Switch>
      </div>
    </div>
  );
}

export { App };
