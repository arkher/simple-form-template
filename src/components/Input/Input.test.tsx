import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./Input";
import "@testing-library/jest-dom/extend-expect";

describe("Input", () => {
  it("should render", () => {
    render(<Input data-testid="input" />);
    expect(screen.getByTestId("input")).toBeTruthy();
  });

  it("should change text correctly when typing", () => {
    render(<Input data-testid="input" />);
    fireEvent.change(screen.getByTestId("input"), {
      target: { value: "test" },
    });
    expect(screen.getByTestId("input")).toHaveValue("test");
  });

  it("should match snapshot", () => {
    render(<Input data-testid="input" />);
    expect(screen.getByTestId("input")).toMatchSnapshot();
  });
});
