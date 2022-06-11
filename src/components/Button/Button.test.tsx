import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import Button from "./Button";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given a Button Component", () => {
  const id = "Hola";
  describe("When it's invoked", () => {
    test("Then it should render the text 'Delete'", () => {
      const expectedResult: string = "Delete";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Button id={id} />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });

  describe("When it's invoked, the user is logged and click on logout button", () => {
    test("Then dispatch must be called", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Button id={id} />
          </BrowserRouter>
        </Provider>
      );

      const button = screen.getByRole("button");
      userEvent.click(button);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
