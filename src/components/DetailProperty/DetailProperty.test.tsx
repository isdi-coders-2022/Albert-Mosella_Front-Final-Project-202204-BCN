import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import DetailProperty from "./DetailProperty";

describe("Given the DetailProperty component", () => {
  describe("When it's invoked", () => {
    test("Then it should render 13 listitems element", () => {
      const expectedLenght = 13;
      const token: string = "MARIPURI666MARIPURI666MARIPURI";
      localStorage.setItem("token", token);

      render(
        <Provider store={store}>
          <BrowserRouter>
            <DetailProperty />
          </BrowserRouter>
        </Provider>
      );

      const result = screen.getAllByRole("listitem");

      expect(result).toHaveLength(expectedLenght);
      localStorage.removeItem("token");
    });

    test("Then it should render 3 list element", () => {
      const expectedLenght = 3;
      const token: string = "MARIPURI666MARIPURI666MARIPURI";
      localStorage.setItem("token", token);

      render(
        <Provider store={store}>
          <BrowserRouter>
            <DetailProperty />
          </BrowserRouter>
        </Provider>
      );

      const result = screen.getAllByRole("list");

      expect(result).toHaveLength(expectedLenght);
      localStorage.removeItem("token");
    });
  });
});
