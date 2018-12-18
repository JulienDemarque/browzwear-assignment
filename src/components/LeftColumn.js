import React, { Component } from "react";

class LeftColumn extends Component {
  render() {
    const { countries, handleSelectCountry, selectedCountry } = this.props;
    return (
      <div>
        <label>
          <h3>Countries</h3>
        </label>
        <form>
          <select
            value={selectedCountry}
            onChange={handleSelectCountry}
            size="6"
          >
            {countries.map(country => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </form>
      </div>
    );
  }
}

export default LeftColumn;
