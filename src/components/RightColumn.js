import React, { Component } from "react";

class RightColumn extends Component {
  render() {
    const { companies } = this.props;
    return (
      <div>
        <h3>Company</h3>
        <div>
          {companies.map(({ companyName }) => (
            <div key={companyName}>
              <button>{companyName}</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default RightColumn;
