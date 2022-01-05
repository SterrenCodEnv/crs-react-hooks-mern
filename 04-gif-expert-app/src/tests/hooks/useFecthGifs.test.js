import "@testing-library/jest-dom";
import { useFetchGifs } from "../../hooks/useFecthGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Test in useFetchGifs hook", () => {
  test("Return initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("The Office")
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("Return images array and loading in false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("The Office")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
