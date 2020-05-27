import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Vendors from "../pages/Vendors";

import { Provider } from "react-redux";
import store from "../store";

const MainRoutes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/vendors" component={Vendors} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoutes;
