import React, { Component } from "react";
import image from "../Assets/PngItem_47865.png";

class Header extends Component {
  render() {
    return (
      <header>
        <img className="header-text" alt="icon" src={image} />
      </header>
    );
  }
}

export default Header;
