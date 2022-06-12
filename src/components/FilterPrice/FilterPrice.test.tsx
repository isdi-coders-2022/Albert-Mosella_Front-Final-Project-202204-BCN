import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import FilterPrice from "./FilterPrice";

describe("Given the FilterPrice component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 3 button elements", () => {
      const expectedLenght = 3;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <FilterPrice />
          </BrowserRouter>
        </Provider>
      );

      const result = screen.getAllByRole("button");

      expect(result).toHaveLength(expectedLenght);
    });
  });
});
