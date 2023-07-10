// ButtonContainer
import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonContainer from "./ButtonContainer";

describe("ButtonContainer", () => {
  it("should render on the screen", () => {
    render(<ButtonContainer data-testid="button-container" error />);
    expect(screen.findByTestId("button-container")).toBeTruthy();
  });

  it("should render the error message when error prop is true", () => {
    render(<ButtonContainer error />);
    expect(
      screen.getByText("Falha ao enviar resultado. Tente novamente.")
    ).toBeTruthy();
  });

  it("should render the success message when error prop is false", () => {
    render(<ButtonContainer error={false} />);
    expect(screen.getByText("Resultado enviado com sucesso!")).toBeTruthy();
  });

  it("should match snapshot when error is true", () => {
    render(<ButtonContainer error />);
    expect(screen.getByTestId("button-container")).toMatchSnapshot();
  });

  it("should match snapshot when error is FALSE", () => {
    render(<ButtonContainer error={false} />);
    expect(screen.getByTestId("button-container")).toMatchSnapshot();
  });
});
