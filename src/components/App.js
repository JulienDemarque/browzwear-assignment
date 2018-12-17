import React, { Component } from "react";
import LeftColumn from "./LeftColumn";
import MiddleColumn from "./MiddleColumn";
import RightColumn from "./RightColumn";
import "../styles/app.css";

import data from "../data/clients.json";

import { getData } from "../utils/getData";

class App extends Component {
  constructor(props) {
    super(props);

    const { countriesList, citiesList, companiesList } = getData(data);

    this.state = {
      countriesList,
      citiesList,
      companiesList,
      selectedCountry: "",
      selectedCity: ""
    };
  }

  handleSelectCountry = e => {
    const selectedCountry = e.target.value;
    this.setState({ selectedCountry });
  };

  handleSelectCity = e => {
    const selectedCity = e.target.value;
    this.setState({ selectedCity });
  };

  render() {
    const {
      countriesList,
      citiesList,
      companiesList,
      selectedCity,
      selectedCountry
    } = this.state;

    const filteredCitiesList = citiesList.filter(city => {
      return city.fromCountry === selectedCountry;
    });
    const filteredCompaniesList = companiesList.filter(company => {
      return company.fromCity === selectedCity;
    });

    return (
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
          <RightColumn companies={filteredCompaniesList} />
        </div>
      </div>
    );
  }
}

export default App;
