import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ValidatePasswordScreen from "./ValidatePasswordScreen";
import "@testing-library/jest-dom/extend-expect";

jest.mock("../../constants", () => ({
  API_URL: "www.test.com",
}));

describe("ValidatePasswordScreen", () => {
  it("should render", () => {
    render(<ValidatePasswordScreen />);
    expect(screen.getByTestId("validate-password-screen")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    render(<ValidatePasswordScreen />);
    expect(screen.getByTestId("validate-password-screen")).toMatchSnapshot();
  });

  it("should render the header", () => {
    render(<ValidatePasswordScreen />);
    expect(screen.getByText("Valide sua senha")).toBeTruthy();
  });

  it("should keep button disabled when name input is empty", () => {
    render(<ValidatePasswordScreen />);
    expect(screen.getByTestId("button")).toBeDisabled();
  });

  it("should enable button when all inputs are valid", async () => {
    render(<ValidatePasswordScreen />);
    const user = userEvent.setup();

    await user.type(screen.getByPlaceholderText("Nome"), "Usuario Teste");
    await user.type(screen.getByPlaceholderText("Email"), "test@test.com");
    await user.type(screen.getByPlaceholderText("Senha"), "222222");

    const button = screen.getByRole("button");

    await waitFor(() => expect(button).not.toBeDisabled());
  });
});
