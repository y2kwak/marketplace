import React from 'react';
import HelloWorld from './Components/HelloWorld' 
import CounterExample from './Components/CounterExample'
import Header from './Components/Header'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>

      <Header />

      <HelloWorld name="Jarod"/>
        
      <Switch>

        <Router exact path="/">
          <h1> This is the home page.</h1>
        </Router>

        <Router path="/about">
          <h1>About us. </h1>
        </Router>

      </Switch>

      </Router>

    </div>
  );
}

export default App;
