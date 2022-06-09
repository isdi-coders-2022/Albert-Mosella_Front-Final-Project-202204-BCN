import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import LoadingPage from "./LoadingPage";

describe("Given a LoadingPage component", () => {
  describe("When it's called", () => {
    test("Then it should render the text 'Loading...'", () => {
      const expectedText = "LOADING...";

      render(
        <Provider store={store}>
          <LoadingPage />
        </Provider>
      );
      const receivedElement = screen.getByText(expectedText);
      expect(receivedElement).toBeInTheDocument();
    });
  });
});
