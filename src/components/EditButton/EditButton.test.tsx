import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import EditButton from "./EditButton";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a EditButton Component", () => {
  const id = "Hola";
  describe("When it's invoked", () => {
    test("Then it should render the text 'Edit'", () => {
      const expectedResult: string = "Edit";

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

  describe("When it's invoked, and the user clicks on edit button", () => {
    test("Then navigate must be called", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <EditButton id={id} />
          </BrowserRouter>
        </Provider>
      );

      const button = screen.getByRole("button");
      userEvent.click(button);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
