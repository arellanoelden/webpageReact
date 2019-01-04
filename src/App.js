import React, { Component } from 'react';
import './styles/App.css';
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
    console.log(this.nav.current.classList.toggle("mobileMenu"));
  }
  render() {
    return (
      <div className="contentContainer">
        <header ref={this.header} className="header">
          <picture >
            <source srcSet={require('./images/hamburger.svg')} />
            <img onClick={this.toggleMenu} alt="hamburgerMenu" src={require('./images/hamburger.png')} />
          </picture>
        </header>
        <Router>
            <div>
              <nav ref={this.nav} onClick={this.toggleMenu}>
                <span className="linksContainer">
                  <NavLink exact to="/" activeClassName="activeLink">Home</NavLink>
                  <NavLink exact to="/projects" activeClassName="activeLink">Projects</NavLink>
                  <NavLink exact to="/coolCode" activeClassName="activeLink">Tips & Tricks</NavLink>
                </span>
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
