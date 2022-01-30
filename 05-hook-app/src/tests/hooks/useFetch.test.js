import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe("Test in <useFetch />", () => {
  test("Should return default values", () => {
    const { result } = renderHook(() =>
      useFetch("https://www.breakingbadapi.com/api/quotes/1")
    );
    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test("Should result of useFetch", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://www.breakingbadapi.com/api/quotes/1")
    );

    await waitForNextUpdate({ timeout: 1000 });
    const { data, loading, error } = result.current;

    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test("Should be handled error", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://reqres.in/api/users?page=2")
    );

    await waitForNextUpdate({ timeout: 1000 });
    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe("Data could not be loaded");
  });
});
