import React from "react";
import privateRoutes from "./private";
import publicRoutes from "./public";
import { Route, Switch } from "react-router-dom";

const Routes = props => {
  console.log("routes props", props);
  return (
    <Switch>
      {privateRoutes.map(item => (
        <Route
          key={item.id}
          component={item.component}
          exact={item.exact}
          path={item.path}
        />
      ))}
      {publicRoutes.map(item => (
        <Route
          key={item.id}
          component={item.component}
          exact={item.exact}
          path={item.path}
        />
      ))}
    </Switch>
  );
};

export default Routes;
