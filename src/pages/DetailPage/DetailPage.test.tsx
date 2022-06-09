import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import DetailPage from "./DetailPage";

describe("Given a DetailsPage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text 'Details'", () => {
      const expectedResult: string = "Details";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <DetailPage />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
