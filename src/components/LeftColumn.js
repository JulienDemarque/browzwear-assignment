import React, { Component } from "react";

class LeftColumn extends Component {
  render() {
    const { countries, handleSelectCountry, selectedCountry } = this.props;
    return (
      <div className="table-container__column">
        <h3 className="column__title">Countries</h3>
        <ul>
          {countries.map(country => (
            <li key={country}>
              <button
                className={
                  country === selectedCountry ? "button_highlight" : ""
                }
                onClick={handleSelectCountry}
                value={country}
              >
                <span> {country}</span>{" "}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LeftColumn;
