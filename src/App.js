import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CounterExample from './Components/CounterExample'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Views/Home'
import About from './Views/About'


function App() {
  return (
    <div>
      <Router>

      <Header />
      <div className="p-3">
      <Switch>

        <Router exact path="/">
          <Home />
        </Router>

        <Router path="/about">
          <About />
        </Router>

      </Switch>
      </div>

      <Footer />
      </Router>

    </div>
  );
}

export default App;
