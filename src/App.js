import React, { Component } from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import asyncComponent from "./components/AsyncComponent";

const AsyncHome = asyncComponent(() => import("./pages/homepage"));
const AsyncCode = asyncComponent(() => import("./pages/coolcode"));
const AsyncProject = asyncComponent(() => import("./pages/projects"));

class router extends Component {
  render() {
    return (
      <Router>
        <div className="contentContainer">
          <nav>
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
    );
  }
}

export default router;
