import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import LoginForm from "./LoginForm";

describe("Given the LogInForm component", () => {
  describe("When it's invoked", () => {
    test("Then it should render one 'Username' label", () => {
      const labelText = "Username";
      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      expect(screen.getAllByText(labelText)).toHaveLength(1);
    });

    test("Then it should render one 'Password' label", () => {
      const labelText = "Password";
      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      expect(screen.getAllByText(labelText)).toHaveLength(1);
    });

    test("Then it should render a button", () => {
      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  describe("When the word 'Nois' is written to the username input field", () => {
    test("Then the value of the username input field should be 'Nois'", () => {
      const inputText = "Nois";
      const labelText = "Username";

      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      userEvent.type(screen.getByLabelText(labelText), inputText);
      expect(screen.getByLabelText(labelText)).toHaveValue(inputText);
    });
  });

  describe("When the word 'Nois' is written to the password input field", () => {
    test("Then the value of the password input field should be 'Nois'", () => {
      const inputText = "Nois";
      const labelText = "Password";

      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );

      userEvent.type(screen.getByLabelText(labelText), inputText);
      expect(screen.getByLabelText(labelText)).toHaveValue(inputText);
    });
  });
});
