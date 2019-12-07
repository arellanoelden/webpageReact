import React, { Component } from "react";
import "./styles/App.css";
// import { Route } from "react-router-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import asyncComponent from "./components/AsyncComponent";
const AsyncHome = asyncComponent(() => import("./pages/homepage"));
const AsyncCode = asyncComponent(() => import("./pages/coolcode"));
const AsyncProject = asyncComponent(() => import("./pages/projects"));

class router extends Component {
  constructor(props) {
    super(props);
    this.nav = React.createRef();
    this.header = React.createRef();
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.nav.current.classList.toggle("mobileMenu");
  }
  render() {
    return (
      <div className="contentContainer">
        <header ref={this.header} className="header">
          <picture>
            <source srcSet={require("./images/hamburger.svg")} />
            <img
              onClick={this.toggleMenu}
              alt="hamburgerMenu"
              src={require("./images/hamburger.png")}
            />
          </picture>
        </header>
        <Router>
          <div>
            <nav ref={this.nav} onClick={this.toggleMenu}>
              <span className="linksContainer">
                <NavLink exact to="/" activeClassName="activeLink">
                  Home
                </NavLink>
                <NavLink exact to="/projects" activeClassName="activeLink">
                  Projects
                </NavLink>
                <NavLink exact to="/coolCode" activeClassName="activeLink">
                  Tips & Tricks
                </NavLink>
              </span>
            </nav>
            <Route exact path="/" component={AsyncHome} />
            <Route exact path="/projects" component={AsyncProject} />
            <Route exact path="/coolCode" component={AsyncCode} />
          </div>
        </Router>
      </div>
    );
  }
}

export default router;
