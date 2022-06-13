import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import AboutPage from "./AboutPage";

describe("Given a AboutPage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text 'You are in good hands'", () => {
      const expectedResult: string = "The best choice";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <AboutPage />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
