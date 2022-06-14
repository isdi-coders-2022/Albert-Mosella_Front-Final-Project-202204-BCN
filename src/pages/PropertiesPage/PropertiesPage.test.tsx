import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { blankStateActionCreator } from "../../redux/features/onePropertySlice";
import store from "../../redux/store/store";
import PropertiesPage from "./PropertiesPage";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppDispatch: () => mockDispatch,
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a PropertiesPage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text 'All properties'", () => {
      const expectedResult: string = "All properties";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <PropertiesPage />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });

  describe("When it's invoked and the create property button is clicked", () => {
    test("Then it should call dispatch", () => {
      const token: string = "MARIPURI666MARIPURI666MARIPURI";
      localStorage.setItem("token", token);

      render(
        <Provider store={store}>
          <BrowserRouter>
            <PropertiesPage />
          </BrowserRouter>
        </Provider>
      );

      const button = screen.getByRole("button", {
        name: /Add a new property/i,
      });
      userEvent.click(button);

      expect(mockDispatch).toHaveBeenCalledWith(blankStateActionCreator());
      expect(mockNavigate).toHaveBeenCalled();

      localStorage.removeItem("token");
    });
  });
});
