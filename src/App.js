import React from 'react';
import './App.css';
import People from "./components/People"
import Planet from "./components/Planet"
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
  <Switch>
    <Route exact path="/planets/:id" component={Planet} />
    <Route exact path="/" component={People} />
  </Switch>
    </>
  );
}

export default App;
