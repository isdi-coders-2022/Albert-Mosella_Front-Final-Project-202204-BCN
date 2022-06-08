import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { logOutActionCreator } from "../../redux/features/userSlice";

import store from "../../redux/store/store";
import Header from "./Header";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given a Header Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the heading 'Rustik'", () => {
      const expectedResult: string = "Rustik";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByRole("heading");

      expect(receivedResult).toHaveTextContent(expectedResult);
    });
  });

  describe("When it's invoked, the user is logged and click on logout button", () => {
    test("Then dispatch must be called", () => {
      const token: string = "MARIPURI666MARIPURI666MARIPURI";
      localStorage.setItem("token", token);

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Provider>
      );

      const button = screen.getByRole("button", { name: /Logout/i });
      userEvent.click(button);

      expect(mockDispatch).toHaveBeenCalledWith(logOutActionCreator());
      localStorage.removeItem("token");
    });
  });
});
