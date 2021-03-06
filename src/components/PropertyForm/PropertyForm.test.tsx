import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import PropertyForm from "./PropertyForm";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given the PropertyForm component", () => {
  const inputText = "Nois";
  const inputNumber = 0;

  const inputTextLabels = ["Type of", "Adress", "Name", "Description", "Image"];

  const inputNumberLabels = [
    "Surface",
    "Price",
    "Bedrooms",
    "Bathrooms",
    "Year",
  ];

  const checkBoxes = [
    "Views",
    "Air Conditioning",
    "Heating",
    "Parking",
    "Pool",
    "Fireplace",
    "Garden",
    "Laundry Room",
    "Storage",
    "Terrace",
  ];

  describe("When it's invoked", () => {
    test("Then it should render all the input labels", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <PropertyForm />
          </BrowserRouter>
        </Provider>
      );

      inputTextLabels.forEach((input) => {
        expect(screen.getByText(input)).toBeInTheDocument();
      });
      inputNumberLabels.forEach((input) => {
        expect(screen.getByText(input)).toBeInTheDocument();
      });
    });
  });

  describe("When the word 'Nois'and number 0 is written to all the text input fields", () => {
    test("Then the value of all the input field should be 'Nois' or number 0", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <PropertyForm />
          </BrowserRouter>
        </Provider>
      );

      inputTextLabels.forEach((input) => {
        userEvent.type(screen.getByLabelText(input), inputText);
      });
      inputNumberLabels.forEach((input) => {
        userEvent.type(screen.getByLabelText(input), inputText);
      });

      inputTextLabels.forEach((input) => {
        expect(screen.getByLabelText(input)).toHaveValue(inputText);
      });
      inputNumberLabels.forEach((input) => {
        expect(screen.getByLabelText(input)).toHaveValue(inputNumber);
      });
    });
  });

  describe("When the submit button is clicked", () => {
    test("Then the value of the input fields should be empty", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <PropertyForm />
          </BrowserRouter>
        </Provider>
      );

      inputTextLabels.forEach((input) => {
        userEvent.type(screen.getByLabelText(input), inputText);
      });
      inputNumberLabels.forEach((input) => {
        userEvent.type(screen.getByLabelText(input), inputText);
      });

      const button = screen.getByRole("button", { name: /Save/i });

      userEvent.click(button);

      inputTextLabels.forEach((input) => {
        expect(screen.getByLabelText(input)).toHaveValue("");
      });
      inputNumberLabels.forEach((input) => {
        expect(screen.getByLabelText(input)).toHaveValue(0);
      });
    });
  });

  describe("When the checkboxes are clicked", () => {
    test("Then the value of the checkboxes should be true", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <PropertyForm />
          </BrowserRouter>
        </Provider>
      );

      checkBoxes.forEach((checkbox) => {
        userEvent.click(screen.getByLabelText(checkbox));
      });

      checkBoxes.forEach((checkbox) => {
        expect(screen.getByLabelText(checkbox)).toBeChecked();
      });
    });
  });

  describe("When it's invoked and the clicks on Back Home button", () => {
    test("Then it should call navigate", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <PropertyForm />
          </BrowserRouter>
        </Provider>
      );

      const button = screen.getByRole("button", { name: /Go back to Home/i });
      userEvent.click(button);

      expect(mockNavigate).toHaveBeenCalled();
    });
  });
});
