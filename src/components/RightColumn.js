import React, { Component } from "react";

class RightColumn extends Component {
  render() {
    const { companies } = this.props;
    return (
      <div>
        <form>
          <label>
            <h3>Company</h3>
          </label>
          <select size="10">
            {companies.map(({ companyName }) => (
              <option key={companyName}>{companyName}</option>
            ))}
          </select>
        </form>
      </div>
    );
  }
}

export default RightColumn;
