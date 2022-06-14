import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import RegisterForm from "./RegisterForm";

describe("Given the RegisterForm component", () => {
  const inputText = "Nois";
  const labelTextPassword = "Password";
  const labelTextUsername = "Username";
  const labelTextName = "Name";

  describe("When it's invoked", () => {
    test("Then it should render the labels 'Username','Password' and 'Name'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm />
          </BrowserRouter>
        </Provider>
      );

      expect(screen.getAllByText("Username")).toHaveLength(1);
      expect(screen.getAllByText("Password")).toHaveLength(1);
      expect(screen.getAllByText("Name")).toHaveLength(1);
    });
  });

  describe("When the word 'Nois' is written to the username, name and password input fields", () => {
    test("Then the value of the username, name and password input fields should be 'Nois'", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm />
          </BrowserRouter>
        </Provider>
      );

      userEvent.type(screen.getByLabelText(labelTextUsername), inputText);
      userEvent.type(screen.getByLabelText(labelTextPassword), inputText);
      userEvent.type(screen.getByLabelText(labelTextName), inputText);
      expect(screen.getByLabelText(labelTextUsername)).toHaveValue(inputText);
      expect(screen.getByLabelText(labelTextUsername)).toHaveValue(inputText);
      expect(screen.getByLabelText(labelTextName)).toHaveValue(inputText);
    });
  });

  describe("When the username, name and password input fields are fill and the button clicked", () => {
    test("Then the value of the username, name and password input fields should be empty", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm />
          </BrowserRouter>
        </Provider>
      );

      userEvent.type(screen.getByLabelText(labelTextPassword), inputText);
      userEvent.type(screen.getByLabelText(labelTextUsername), inputText);
      userEvent.type(screen.getByLabelText(labelTextName), inputText);
      const button = screen.getByRole("button");
      userEvent.click(button);
      expect(screen.getByLabelText(labelTextPassword)).toHaveValue("");
      expect(screen.getByLabelText(labelTextUsername)).toHaveValue("");
      expect(screen.getByLabelText(labelTextName)).toHaveValue("");
    });
  });
});
