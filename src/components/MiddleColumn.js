import React, { Component } from "react";

class MiddleColumn extends Component {
  render() {
    const { cities, handleSelectCity } = this.props;
    return (
      <div>
        <h3>Cities</h3>
        <div>
          {cities.map(({ cityName }) => (
            <div key={cityName}>
              <button value={cityName} onClick={handleSelectCity}>
                {cityName}
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MiddleColumn;
