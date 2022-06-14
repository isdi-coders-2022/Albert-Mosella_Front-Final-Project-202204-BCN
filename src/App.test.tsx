import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { logInActionCreator } from "./redux/features/userSlice";
import store from "./redux/store/store";

const mockDispatch = jest.fn();

jest.mock("./redux/hooks", () => ({
  ...jest.requireActual("./redux/hooks"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given the App component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a list element", () => {
      const expectedLenght = 3;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );

      const result = screen.getAllByRole("listitem");

      expect(result).toHaveLength(expectedLenght);
    });
  });

  describe("When it's invoked and a user logs in", () => {
    test("Then it should call dispatch", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      );
      const initialUser = {
        name: "Test",
        username: "test",
        logged: false,
      };

      logInActionCreator(initialUser);

      expect(mockDispatch).toHaveBeenCalled();
      localStorage.removeItem("token");
    });
  });
});
