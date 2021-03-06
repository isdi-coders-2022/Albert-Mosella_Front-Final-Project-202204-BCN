import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockList } from "../../mocks/mockProperty";
import store from "../../redux/store/store";
import PropertiesList from "../PropertiesList/PropertiesList";

describe("Given the Property component", () => {
  describe("When it's invoked", () => {
    test("Then it should render two list element", () => {
      const expectedLenght = 3;

      render(
        <Provider store={store}>
          <BrowserRouter>
            <PropertiesList allProperties={mockList} />
          </BrowserRouter>
        </Provider>
      );

      const result = screen.getAllByRole("list");

      expect(result).toHaveLength(expectedLenght);
    });
  });
});
