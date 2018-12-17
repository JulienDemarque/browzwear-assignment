import React, { Component } from "react";

class LeftColumn extends Component {
  render() {
    const { countries, handleSelectCountry } = this.props;
    return (
      <div>
        <h3>Countries</h3>
        <div>
          {countries.map(country => (
            <div key={country}>
              <button value={country} onClick={handleSelectCountry}>
                {country}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default LeftColumn;
