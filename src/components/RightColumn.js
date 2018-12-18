import React, { Component } from "react";

class RightColumn extends Component {
  render() {
    const { companies, selectedCompany, handleSelectCompany } = this.props;

    return (
      <div className="table-container__column">
        <h3 className="column__title">Company</h3>
        <ul>
          {companies.map(({ companyName }) => (
            <li key={companyName}>
              <button
                className={
                  companyName === selectedCompany ? "button_highlight" : ""
                }
                onClick={handleSelectCompany}
                value={companyName}
              >
                <span>{companyName}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RightColumn;
