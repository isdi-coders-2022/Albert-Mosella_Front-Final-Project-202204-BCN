import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import FilterButton from "./FilterButton";

describe("Given a FilterButton Component", () => {
  describe("When it's invoked with the text 'Nois'", () => {
    test("Then it should render the text 'Nois'", () => {
      const textToShow: string = "Nois";
      const mockFunction = () => {
        return 1;
      };

      render(
        <Provider store={store}>
          <BrowserRouter>
            <FilterButton text={textToShow} action={mockFunction} />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(textToShow);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
