import React from "react";
import ReactDOM from 'react-dom';
import './style/main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home'
import About from 'pages/About'
import Navbar from 'components/Navbar';


const App = () => {


  return (
    <div>
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
