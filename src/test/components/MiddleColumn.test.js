import React from "react";
import { shallow } from "enzyme";

import MiddleColumn from "../../components/MiddleColumn";
import { MiddleColumnProps } from "../data-for-testing";
const { cities, selectedCity } = MiddleColumnProps;

describe("MiddleColumn Component", () => {
  let wrapper;
  const mockHandleSelectCity = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <MiddleColumn
        cities={cities}
        selectedCity={selectedCity}
        handleSelectCity={mockHandleSelectCity}
      />
    );
  });

  it("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
