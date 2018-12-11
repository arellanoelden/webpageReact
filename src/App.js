import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Homepage from './pages/homepage';
import Coolcode from './pages/coolcode';
import Projects from './pages/projects';

class App extends Component {

  constructor(props) {
    super(props);
    this.nav = React.createRef();
    this.header = React.createRef();
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    
  }
  render() {
    return (
      <div className="contentContainer">
        <Header />
        <Router>
            <div>
              <nav ref={this.nav}>
                  <NavLink exact to="/" activeClassName="activeLink">Home</NavLink>
                  <NavLink exact to="/projects" activeClassName="activeLink">Projects</NavLink>
                  <NavLink exact to="/coolCode" activeClassName="activeLink">CoolCode</NavLink>
              </nav>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/coolCode" component={Coolcode} />
            </div>
        </Router>
      </div>
    );
  }
}

export default App;
