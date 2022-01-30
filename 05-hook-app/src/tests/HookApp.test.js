import React from "react";
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe("Test in <HookApp/> component", () => {
  test("Show component", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
