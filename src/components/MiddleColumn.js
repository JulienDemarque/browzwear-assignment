import React, { Component } from "react";

class MiddleColumn extends Component {
  render() {
    const { cities, handleSelectCity, selectedCity } = this.props;
    return (
      <div className="table-container__column">
        <h3>Cities</h3>
        <ul>
          {cities.map(({ cityName }) => (
            <li key={cityName}>
              <button
                className={cityName === selectedCity ? "button_highlight" : ""}
                onClick={handleSelectCity}
                value={cityName}
              >
                <span> {cityName}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MiddleColumn;
