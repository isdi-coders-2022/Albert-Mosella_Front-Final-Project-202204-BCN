import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import mockProperty from "../../mocks/mockProperty";

import store from "../../redux/store/store";
import Property from "./Property";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given the Property component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 3 listitem elements", () => {
      const expectedLenght = 3;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Property property={mockProperty} />
          </BrowserRouter>
        </Provider>
      );

      const result = screen.getAllByRole("listitem");

      expect(result).toHaveLength(expectedLenght);
    });
  });

  describe("When it's invoked and the user is logged", () => {
    test("Then it should render 1 button elements", () => {
      const expectedLenght = 1;
      const token: string = "MARIPURI666MARIPURI666MARIPURI";
      localStorage.setItem("token", token);

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Property property={mockProperty} />
          </BrowserRouter>
        </Provider>
      );

      const result = screen.getAllByRole("button");

      expect(result).toHaveLength(expectedLenght);
      localStorage.removeItem("token");
    });
  });

  describe("When it's invoked and the item clicked", () => {
    test("Then navigate must be called", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Property property={mockProperty} />
          </BrowserRouter>
        </Provider>
      );

      const clickItem = screen.getByRole("heading");
      userEvent.click(clickItem);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
