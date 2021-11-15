import React, { Component } from "react";
import Card from "./breweryComponent/card";
import axios from "axios";


const BreweryApi = 'https://api.openbrewerydb.org/breweries';

class GetBreweries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breweries: []
    };
  }


  componentDidMount() {
    axios.get(BreweryApi).then(res => {
      console.log(res);
      this.setState({ breweries: res.data });
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="app-card-list" id="app-card-list">
          {this.state.breweries.map(brewery => (
            <Card
              key={brewery.name.toString()}
              name={brewery.name}
              type={brewery.brewery_type}
              address={
                brewery.street +
                " " +
                brewery.city +
                ", " +
                brewery.state +
                " - " +
                brewery.postal_code
              }
              website={brewery.website_url}
              longitude={brewery.longitude}
              latitude={brewery.latitude}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default GetBreweries;
