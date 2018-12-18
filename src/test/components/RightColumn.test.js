import React from "react";
import { shallow } from "enzyme";

import RightColumn from "../../components/RightColumn";
import { RightColumnProps } from "../data-for-testing";
const { companies, selectedCompany } = RightColumnProps;

describe("RightColumn Component", () => {
  let wrapper;
  const mockHandleSelectCompany = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <RightColumn
        companies={companies}
        selectedCompany={selectedCompany}
        handleSelectCompany={mockHandleSelectCompany}
      />
    );
  });

  it("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
