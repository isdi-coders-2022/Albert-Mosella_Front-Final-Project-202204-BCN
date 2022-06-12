import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  describe("When it's invoked and the filter button clicked", () => {
    test("Then it should render 9 button elements", () => {
      const expectedLenght = 9;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <FilterPrice />
          </BrowserRouter>
        </Provider>
      );

      const button = screen.getByText("Filter by price");
      userEvent.click(button);

      const result = screen.getAllByRole("button");
      expect(result).toHaveLength(expectedLenght);
    });
  });

  describe("When it's invoked and the filter button clicked, and a filter option clicked", () => {
    test("Then it should render 3 button elements", () => {
      const expectedLenght = 3;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <FilterPrice />
          </BrowserRouter>
        </Provider>
      );

      const button = screen.getByText("Filter by price");
      userEvent.click(button);
      const optionButton1 = screen.getByText("Show All");
      userEvent.click(optionButton1);
      userEvent.click(button);
      const optionButton2 = screen.getByText("Under 200.000€");
      userEvent.click(optionButton2);
      userEvent.click(button);
      const optionButton3 = screen.getByText("Under 400.000€");
      userEvent.click(optionButton3);
      userEvent.click(button);
      const optionButton4 = screen.getByText("Under 600.000€");
      userEvent.click(optionButton4);
      userEvent.click(button);
      const optionButton5 = screen.getByText("Under 800.000€");
      userEvent.click(optionButton5);
      userEvent.click(button);
      const optionButton6 = screen.getByText("Under 1.000.000€");
      userEvent.click(optionButton6);

      const result = screen.getAllByRole("button");
      expect(result).toHaveLength(expectedLenght);
    });
  });
});
