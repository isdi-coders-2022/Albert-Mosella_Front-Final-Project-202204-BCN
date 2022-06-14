import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import LoginForm from "./LoginForm";

describe("Given the LoginForm component", () => {
  const inputText = "Nois";
  const labelTextPassword = "Password";
  const labelTextUsername = "Username";

  describe("When it's invoked", () => {
    test("Then it should render the labels 'Username' and 'Password'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        </Provider>
      );

      expect(screen.getByText("Username")).toBeInTheDocument();
      expect(screen.getByText("Password")).toBeInTheDocument();
    });
  });

  describe("When the word 'Nois' is written to the username input field", () => {
    test("Then the value of the username input field should be 'Nois'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        </Provider>
      );

      userEvent.type(screen.getByLabelText(labelTextUsername), inputText);
      userEvent.type(screen.getByLabelText(labelTextPassword), inputText);
      expect(screen.getByLabelText(labelTextUsername)).toHaveValue(inputText);
      expect(screen.getByLabelText(labelTextUsername)).toHaveValue(inputText);
    });
  });

  describe("When the username and password input fields are fill and the button clicked", () => {
    test("Then the value of the username and password input fields should be empty", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        </Provider>
      );

      userEvent.type(screen.getByLabelText(labelTextPassword), inputText);
      userEvent.type(screen.getByLabelText(labelTextUsername), inputText);
      const button = screen.getByRole("button");
      userEvent.click(button);
      expect(screen.getByLabelText(labelTextPassword)).toHaveValue("");
      expect(screen.getByLabelText(labelTextUsername)).toHaveValue("");
    });
  });
});
