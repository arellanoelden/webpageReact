import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class header extends Component {
  
  
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
      <div className="headerContainer">
        <header ref={this.header} className="header">
          <picture >
            <source srcSet={require('../images/hamburger.svg')} />
            <img onClick={this.toggleMenu()} alt="hamburgerMenu" src={require('../images/hamburger.png')} />
          </picture>
        </header>
      </div>
    );
  }
}

export default header;