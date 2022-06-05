import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import PropertiesPage from "./PropertiesPage";

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
});
