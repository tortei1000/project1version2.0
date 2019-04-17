import React from 'react';
import { Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Details from "./Details"

export default (

  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Details} path="/details" />"
  </Switch>
)