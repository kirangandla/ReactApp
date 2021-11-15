import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import Header from "./header";


//Replace this with valis Google api key
const GOOGLE_API_KEY = 'AIzaaaSyDGC6e7RITFk1Azq_7DuqWt4scwXooBxQc';

class location extends Component {
  render() {
    const { longitude } = this.props.location.state;
    const { latitude } = this.props.location.state;

    const mapStyles = {
      width: "100%",
      height: "100%"
    };

    return (
      <div>
        <Header />
        <header className="back-to-main-block">
          <NavLink className="back-to-main-text" to="/">
            Go back
          </NavLink>
        </header>
        {longitude == null && latitude == null && (
          <header className="map-error-block">
            <div className="error-text">
              No info found
            </div>
          </header>
        )}

        <Map google={this.props.google} zoom={12} style={mapStyles} initialCenter={{ lat: latitude, lng: longitude }} >
          <Marker position={{ lat: latitude, lng: longitude }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY
})(location);
