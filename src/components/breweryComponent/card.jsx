import React, { Component } from "react";
import BreweryCardHeader from "./BreweryCardHeaderComponent";
import BreweryCardBody from "./BreweryCardBodyComponent";


class BreweryCardComponent extends Component {
  render() {
    return (
      <article className="card">
        {/* <BreweryCardHeader /> */}
        <div className="card-body">
          <div className="card-title">{this.props.name}</div>
          <BreweryCardBody
            name={this.props.name}
            type={this.props.type}
            address={this.props.address}
            website={this.props.website}
            latitude={this.props.latitude}
            longitude={this.props.longitude}
          />
        </div>
      </article>
    );
  }
}

export default BreweryCardComponent;
