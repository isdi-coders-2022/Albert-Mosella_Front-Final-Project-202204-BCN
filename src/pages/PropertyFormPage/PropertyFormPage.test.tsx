import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import PropertyFormPage from "./PropertyFormPage";

describe("Given a PropertyFormPage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text 'Create or edit a property'", () => {
      const expectedResult: string = "Create or edit a property";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <PropertyFormPage />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
