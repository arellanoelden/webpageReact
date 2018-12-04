import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Homepage from './pages/homepage';
import Coolcode from './pages/coolcode';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <Router>
          <div>
            <nav ref="nav">
                <NavLink exact to="/" activeClassName="activeLink">Home</NavLink>
                <NavLink exact to="/coolCode" activeClassName="activeLink">CoolCode</NavLink>
            </nav>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/coolCode" component={Coolcode} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
