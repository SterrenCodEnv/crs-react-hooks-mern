import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("Test in <useCounter />>", () => {
  test("Should return default values", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(1);
    expect(result.current.increment).toBeInstanceOf(Function);
    expect(result.current.decrement).toBeInstanceOf(Function);
    expect(result.current.reset).toBeInstanceOf(Function);
  });

  test("Should have the counter at 100", () => {
    const { result } = renderHook(() => useCounter(100));
    expect(result.current.counter).toBe(100);
  });

  test("Shoult increment counter in 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;
    act(() => {
      increment();
    });
    const { counter } = result.current;
    expect(counter).toBe(101);
  });

  test("Shoult decrement counter in 1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    act(() => {
      decrement();
    });
    const { counter } = result.current;
    expect(counter).toBe(99);
  });

  test("Shoult reset counter", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement, reset } = result.current;
    act(() => {
      decrement();
      reset();
    });
    const { counter } = result.current;
    expect(counter).toBe(100);
  });
});
