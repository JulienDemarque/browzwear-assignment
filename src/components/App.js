import React, { Component } from "react";
import Geocode from "react-geocode";

import LeftColumn from "./LeftColumn";
import MiddleColumn from "./MiddleColumn";
import RightColumn from "./RightColumn";
import MyMapComponent from "./MyMapComponent";
import "../styles/app.css";

import data from "../data/clients.json";

import { getData } from "../utils/getData";

require("dotenv").config();

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(process.env.REACT_APP_GOOGLEMAP_KEY);
// Enable or disable logs. Its optional.
Geocode.enableDebug();

class App extends Component {
  constructor(props) {
    super(props);

    const {
      countriesList,
      citiesList,
      companiesList,
      firstCountry,
      firstCity,
      firstCompany
    } = getData(data);

    this.state = {
      fullList: data.Customers,
      countriesList,
      citiesList,
      companiesList,
      selectedCountry: firstCountry,
      selectedCity: firstCity,
      selectedCompany: firstCompany,
      location: { lat: 0, lng: 0 },
      currentCompanyAddress: ""
    };
  }

  componentDidMount() {
    this.changeLocation();
  }

  changeLocation() {
    const { fullList, selectedCompany } = this.state;
    const currentCompany = fullList.find(company => {
      return company.CompanyName === selectedCompany;
    });
    const { Address, City, PostalCode, Country } = currentCompany;
    const currentCompanyAddress = `${Address} ${City} ${PostalCode} ${Country}`;
    // Get latidude & longitude from address
    Geocode.fromAddress(currentCompanyAddress).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({ location: { lat, lng }, currentCompanyAddress });
      },
      error => {
        console.error(error);
      }
    );
  }

  handleSelectCountry = e => {
    const selectedCountry = e.target.value;
    this.setState({ selectedCountry });
  };

  handleSelectCity = e => {
    const selectedCity = e.target.value;
    this.setState({ selectedCity });
  };

  handleSelectCompany = e => {
    const selectedCompany = e.target.value;
    this.setState({ selectedCompany }, this.changeLocation);
  };

  render() {
    const {
      countriesList,
      citiesList,
      companiesList,
      selectedCity,
      selectedCountry,
      selectedCompany,
      location,
      currentCompanyAddress
    } = this.state;

    const filteredCitiesList = citiesList.filter(city => {
      return city.fromCountry === selectedCountry;
    });
    const filteredCompaniesList = companiesList.filter(company => {
      return company.fromCity === selectedCity;
    });

    return (
      <div className="app-container">
        <div className="table-container">
          <div className="table-container__column">
            <LeftColumn
              selectedCountry={selectedCountry}
              handleSelectCountry={this.handleSelectCountry}
              countries={countriesList}
            />
          </div>
          <div className="table-container__column">
            <MiddleColumn
              selectedCity={selectedCity}
              handleSelectCity={this.handleSelectCity}
              cities={filteredCitiesList}
            />
          </div>
          <div className="table-container__column">
            <RightColumn
              selectedCompany={selectedCompany}
              handleSelectCompany={this.handleSelectCompany}
              companies={filteredCompaniesList}
            />
          </div>
          <div className="table-container__column">
            <h3>Map</h3>
            <div className="myGoogleMap">
              <MyMapComponent
                location={location}
                currentCompanyAddress={currentCompanyAddress}
                isMarkerShown
                googleMapURL={
                  "https://maps.googleapis.com/maps/api/js?key=" +
                  process.env.REACT_APP_GOOGLEMAP_KEY +
                  "&v=3.exp&libraries=geometry,drawing,places"
                }
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `300px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
