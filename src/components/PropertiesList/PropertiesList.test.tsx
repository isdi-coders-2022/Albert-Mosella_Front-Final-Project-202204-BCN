import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import PropertiesList from "./PropertiesList";

describe("Given the Property component", () => {
  describe("When it's invoked", () => {
    test("Then it should render a list element", () => {
      const expectedLenght = 1;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <PropertiesList allProperties={[]} />
          </BrowserRouter>
        </Provider>
      );

      const result = screen.getAllByRole("list");

      expect(result).toHaveLength(expectedLenght);
    });
  });

  describe("When it's invoked and the next button clicked", () => {
    test("Then it should render a list element", () => {
      const expectedLenght = 1;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <PropertiesList allProperties={[]} />
          </BrowserRouter>
        </Provider>
      );

      userEvent.click(screen.getByText("Prev"));
      userEvent.click(screen.getByText("Next"));

      const result = screen.getAllByRole("list");

      expect(result).toHaveLength(expectedLenght);
    });
  });
});
