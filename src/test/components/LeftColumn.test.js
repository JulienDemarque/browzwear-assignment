import React from "react";
import { shallow } from "enzyme";

import LeftColumn from "../../components/LeftColumn";
import { LeftColumnProps } from "../data-for-testing";
const { countries, selectedCountry } = LeftColumnProps;

describe("LeftColumn Component", () => {
  let wrapper;
  const mockHandleSelectCountry = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <LeftColumn
        countries={countries}
        selectedCountry={selectedCountry}
        handleSelectCountry={mockHandleSelectCountry}
      />
    );
  });

  it("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
