import React, { Component } from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import asyncComponent from "./components/AsyncComponent";

const AsyncHome = asyncComponent(() => import("./pages/homepage"));
const AsyncNotes = asyncComponent(() => import("./pages/notes"));
const AsyncNote = asyncComponent(() => import("./pages/note"));
const AsyncProject = asyncComponent(() => import("./pages/projects"));
// const AsyncBlogs = asyncComponent(() => import("./pages/blogs"));
// const AsyncBlog = asyncComponent(() => import("./pages/blog"));

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
              <NavLink exact to="/notes" activeClassName="activeLink">
                Notes
              </NavLink>
            </span>
          </nav>
          <Route exact path="/" component={AsyncHome} />
          <Route exact path="/projects" component={AsyncProject} />
          <Route exact path="/notes" component={AsyncNotes} />
          <Route exact path="/notes/:id" component={AsyncNote} />
        </div>
      </Router>
    );
  }
}

export default router;
