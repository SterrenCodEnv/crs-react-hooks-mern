import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFecthGifs";
jest.mock("../../hooks/useFecthGifs");

describe("Test in GifGrid", () => {
  const category = "The Office";

  test("Show GifGrid component correctly", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Show items when loading images in useFetchGifs", () => {
    const gifs = [
      {
        id: "abc",
        ulr: "https://google.com",
        title: "Gif Title",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });

    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
