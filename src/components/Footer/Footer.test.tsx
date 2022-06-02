import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import Footer from "./Footer";

describe("Given a Footer Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the heading 'Rustik'", () => {
      const expectedResult: string = "Rustik";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Footer />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByRole("heading");

      expect(receivedResult).toHaveTextContent(expectedResult);
    });
  });
});
