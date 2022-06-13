import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import HomePage from "./HomePage";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a HomePage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text 'You are in good hands'", () => {
      const expectedResult: string = "You're in good hands";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });

  describe("When it's invoked, and the user clicks on Learn More nutton", () => {
    test("Then navigate must be called", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <HomePage />
          </BrowserRouter>
        </Provider>
      );

      const button = screen.getByRole("button");
      userEvent.click(button);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
