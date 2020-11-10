import React, { Component } from "react";
 
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
    <section id="navbar">
          <div className="nav-links">
          <a className="navbar-item" href="#"> Logout </a>
          <a className="navbar-item" href="#"> Notifications </a>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
 
export default NavBar;