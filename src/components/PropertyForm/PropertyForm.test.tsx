import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import PropertyForm from "./PropertyForm";

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
        expect(screen.getAllByText(input)).toHaveLength(1);
      });
      inputNumberLabels.forEach((input) => {
        expect(screen.getAllByText(input)).toHaveLength(1);
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

      const button = screen.getByRole("button");

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
});
