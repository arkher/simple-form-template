// Button
import { fireEvent, render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  it("should render the button", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeTruthy();
  });

  it("should call the onClick function when clicked", () => {
    const onClick = jest.fn();
    render(
      <Button data-testid="button" onClick={onClick}>
        Click me
      </Button>
    );
    fireEvent.click(screen.getByText("Click me"));
    expect(onClick).toHaveBeenCalled();
  });

  it("should match snapshot", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByTestId("button")).toMatchSnapshot();
  });
});
