import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import EditButton from "./EditButton";

describe("Given a EditButton Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text 'E'", () => {
      const expectedResult: string = "E";
      const id = "Hola";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <EditButton id={id} />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
