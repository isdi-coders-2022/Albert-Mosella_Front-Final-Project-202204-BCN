import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import EditPropertyPage from "./EditPropertyPage";

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
});
