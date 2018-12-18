import React, { Component } from "react";

class MiddleColumn extends Component {
  render() {
    const { cities, handleSelectCity, selectedCity } = this.props;
    return (
      <div>
        <label>
          <h3>Cities</h3>
        </label>
        <form>
          <select value={selectedCity} onChange={handleSelectCity} size="6">
            {cities.map(({ cityName }) => (
              <option key={cityName} value={cityName}>
                {cityName}
              </option>
            ))}
          </select>
        </form>
      </div>
    );
  }
}

export default MiddleColumn;
