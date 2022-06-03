import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store from "../../redux/store/store";
import Property from "./Property";

describe("Given the Property component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the labels 'Username' and 'Password'", () => {
      const expectedLenght = 3;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Property />
          </BrowserRouter>
        </Provider>
      );

      const result = screen.getAllByRole("listitem");

      expect(result).toHaveLength(expectedLenght);
    });
  });
});
