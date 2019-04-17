import React from 'react';
import { Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import CreateRecipe from './components/CreateRecipe';
import Calendar from './components/Calendar';

export default (

  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={Calendar} path="/calendar" />"
    <Route component={CreateRecipe} path="/createrecipe" />
  </Switch>
)