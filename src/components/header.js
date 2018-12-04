import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Homepage from '../pages/homepage';
import Coolcode from '../pages/coolcode';

class header extends Component {
  
  
  constructor(props) {
      super(props);
      //this.state = {
      //  games: [["Halo 5","XBOX ONE","4/5"],["Fortnite","PC","4.5/5"],["Overwatch","PC","5/5"]]
      //}
      this.nav = React.createRef();
      this.header = React.createRef();
      this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
     
  }
  
  render() {
    return (
      <div className="headerContainer">
        <header ref={this.header} className="header">
          <picture >
            <source srcSet={require('../images/hamburger.svg')} />
            <img onClick={this.toggleMenu()} alt="hamburgerMenu" src={require('../images/hamburger.png')} />
          </picture>
        </header>
        <Router>
            <div>
              <nav ref={this.nav}>
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

export default header;