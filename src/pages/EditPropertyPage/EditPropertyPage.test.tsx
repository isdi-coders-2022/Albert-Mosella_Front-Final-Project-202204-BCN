import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import EditPropertyPage from "./EditPropertyPage";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a EditPropertyPage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text 'Edit a property'", () => {
      const expectedResult: string = "Edit a property";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <EditPropertyPage />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });

  describe("When it's invoked and the user is logged", () => {
    test("Then it should call navigate", () => {
      jest.spyOn(Storage.prototype, "getItem").mockReturnValue(null);

      render(
        <Provider store={store}>
          <BrowserRouter>
            <EditPropertyPage />
          </BrowserRouter>
        </Provider>
      );

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
