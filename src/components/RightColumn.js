import React, { Component } from "react";

class RightColumn extends Component {
  render() {
    const { companies, selectedCompany, handleSelectCompany } = this.props;
    return (
      <div>
        <form>
          <label>
            <h3>Company</h3>
          </label>
          <select
            size="6"
            value={selectedCompany}
            onChange={handleSelectCompany}
          >
            {companies.map(({ companyName }) => (
              <option
                onClick={handleSelectCompany}
                value={companyName}
                key={companyName}
              >
                {companyName}
              </option>
            ))}
          </select>
        </form>
      </div>
    );
  }
}

export default RightColumn;
