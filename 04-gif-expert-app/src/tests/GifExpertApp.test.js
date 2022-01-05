import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp";

describe("Test in GifExpertApp", () => {
  test("Show GifExpertApp component correctly", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Show categories list", () => {
    const categories = ["The Office", "The Big Bang Theory"];
    const wrapper = shallow(<GifExpertApp defaultCategory={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
