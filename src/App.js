import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './containers/Login/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ToDo from "./containers/TodoList/Todo";
function App(){
return (
  <Router>

    <Switch>
    <Route exact path="/">
      <Login className="App"/>
    </Route>
    <Route path="/todo">
          <ToDo/>
        </Route>
    </Switch>
  </Router>

);

}
export default App;
