import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Test in <useForm />", () => {
  const initialForm = {
    name: "Juan",
    surname: "Sterren",
    email: "sterrenjuanignacio@gmail.com",
  };

  test("Should return default form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;
    expect(values).toEqual(initialForm);
    expect(handleInputChange).toBeInstanceOf(Function);
    expect(reset).toBeInstanceOf(Function);
  });

  test("Should change name in the form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "Ignacio",
        },
      });
    });
    const [values] = result.current;
    expect(values).toEqual({
      ...initialForm,
      name: "Ignacio",
    });

    act(() => {
      reset();
    });
    expect(result.current[0]).toEqual(initialForm);
  });
});
