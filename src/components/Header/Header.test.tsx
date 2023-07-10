import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("should render", () => {
    render(<Header />);
    expect(screen.getByText("Valide sua senha")).toBeTruthy();
  });

  it("should match snapshot", () => {
    render(<Header />);
    expect(screen.getByTestId("header")).toMatchSnapshot();
  });
});
