import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

const title = "Test Title";
const url = "https://www.google.com";
const wrapper = shallow(<GifGridItem title={title} url={url} />);

describe("Test in GifGridItem.js", () => {
  test("Show GifGridItem component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Paragraph with title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("Image with url and alt", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("Div contain animated class", () => {
    const div = wrapper.find("div");
    expect(div.prop("className").includes("animate__fadeIn")).toBe(true);
  });
});
