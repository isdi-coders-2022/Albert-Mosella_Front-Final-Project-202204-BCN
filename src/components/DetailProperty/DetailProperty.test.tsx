import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import DetailProperty from "./DetailProperty";

describe("Given the DetailProperty component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 13 listitem elements", () => {
      const expectedLenght = 13;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <DetailProperty />
          </BrowserRouter>
        </Provider>
      );

      const result = screen.getAllByRole("listitem");

      expect(result).toHaveLength(expectedLenght);
    });
  });
});
