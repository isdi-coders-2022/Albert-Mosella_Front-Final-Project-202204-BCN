import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When it's called", () => {
    test("Then it should render the text 'Not Found!'", () => {
      const expectedText = "Not Found!";

      render(
        <Provider store={store}>
          <NotFoundPage />
        </Provider>
      );
      const receivedElement = screen.getByText(expectedText);
      expect(receivedElement).toBeInTheDocument();
    });
  });
});
