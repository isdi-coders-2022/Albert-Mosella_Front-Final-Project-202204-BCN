import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import LoginPage from "./LoginPage";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a LoginPage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text 'User Login'", () => {
      const expectedResult: string = "User Login";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });

  describe("When it's invoked and the user is logged", () => {
    test("Then it should call navigate", () => {
      jest.spyOn(Storage.prototype, "getItem").mockReturnValue("token");

      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        </Provider>
      );

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
