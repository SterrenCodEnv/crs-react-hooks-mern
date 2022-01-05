import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Test in AddCategory.js", () => {
  const setCategory = jest.fn();
  let wrapper = shallow(<AddCategory setCategory={setCategory} />);
  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategory={setCategory} />);
  });

  test("show AddCategory componen correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("validate textbox", () => {
    const input = wrapper.find("input");
    const value = "TextBox Value";
    input.simulate("change", { target: { value } });
  });

  test("No submit value on form", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategory).not.toHaveBeenCalled();
  });
});
