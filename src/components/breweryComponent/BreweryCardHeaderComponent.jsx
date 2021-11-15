import React, { Component } from "react";

class BreweryCardHeaderComponent extends Component {
  render() {
    const image = "https://cdn.pixabay.com/photo/2015/06/24/13/31/beer-820011_960_720.jpg";

    var style = {
      backgroundImage: "url(" + image + ")"
    };

    return <header style={style} id={image} className="card-header" />;
  }
}

export default BreweryCardHeaderComponent;
