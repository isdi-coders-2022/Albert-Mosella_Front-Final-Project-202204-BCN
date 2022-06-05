import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import Button from "./Button";

describe("Given a Button Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text 'X'", () => {
      const expectedResult: string = "X";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Button />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
