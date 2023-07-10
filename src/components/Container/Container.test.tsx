import React from "react";
import { render, screen } from "@testing-library/react";
import Container from "./Container";

describe("Container", () => {
  it("should render", () => {
    render(<Container data-testid="container">Container</Container>);
    expect(screen.getByTestId("container")).toBeTruthy();
  });

  it("should match snapshot", () => {
    render(<Container data-testid="container">Container</Container>);
    expect(screen.getByTestId("container")).toMatchSnapshot();
  });
});
