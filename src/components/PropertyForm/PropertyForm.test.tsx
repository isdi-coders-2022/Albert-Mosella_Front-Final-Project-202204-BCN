import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import PropertyForm from "./PropertyForm";

describe("Given the PropertyForm component", () => {
  const inputText = "Nois";
  const inputNumber = 0;
  const labelTextTypeof = "Type of";
  const labelTextAdress = "Adress";
  const labelTextName = "Name";
  const labelTextSurface = "Surface";
  const labelTextPrice = "Price";
  const labelTextBedrooms = "Bedrooms";
  const labelTextBathrooms = "Bathrooms";
  const labelTextYear = "Year";
  const labelTextDescription = "Description";
  const labelTextImage = "Image";

  describe("When it's invoked", () => {
    test("Then it should render all the input labels", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <PropertyForm />
          </BrowserRouter>
        </Provider>
      );

      expect(screen.getAllByText("Type of")).toHaveLength(1);
      expect(screen.getAllByText("Adress")).toHaveLength(1);
      expect(screen.getAllByText("Name")).toHaveLength(1);
      expect(screen.getAllByText("Surface")).toHaveLength(1);
      expect(screen.getAllByText("Price")).toHaveLength(1);
      expect(screen.getAllByText("Bedrooms")).toHaveLength(1);
      expect(screen.getAllByText("Bathrooms")).toHaveLength(1);
      expect(screen.getAllByText("Year")).toHaveLength(1);
      expect(screen.getAllByText("Description")).toHaveLength(1);
      expect(screen.getAllByText("Image")).toHaveLength(1);
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

      userEvent.type(screen.getByLabelText(labelTextTypeof), inputText);
      userEvent.type(screen.getByLabelText(labelTextAdress), inputText);
      userEvent.type(screen.getByLabelText(labelTextName), inputText);
      userEvent.type(screen.getByLabelText(labelTextSurface), inputText);
      userEvent.type(screen.getByLabelText(labelTextPrice), inputText);
      userEvent.type(screen.getByLabelText(labelTextBedrooms), inputText);
      userEvent.type(screen.getByLabelText(labelTextBathrooms), inputText);
      userEvent.type(screen.getByLabelText(labelTextYear), inputText);
      userEvent.type(screen.getByLabelText(labelTextDescription), inputText);
      userEvent.type(screen.getByLabelText(labelTextImage), inputText);
      expect(screen.getByLabelText(labelTextTypeof)).toHaveValue(inputText);
      expect(screen.getByLabelText(labelTextAdress)).toHaveValue(inputText);
      expect(screen.getByLabelText(labelTextName)).toHaveValue(inputText);
      expect(screen.getByLabelText(labelTextSurface)).toHaveValue(inputNumber);
      expect(screen.getByLabelText(labelTextPrice)).toHaveValue(inputNumber);
      expect(screen.getByLabelText(labelTextBedrooms)).toHaveValue(inputNumber);
      expect(screen.getByLabelText(labelTextBathrooms)).toHaveValue(
        inputNumber
      );
      expect(screen.getByLabelText(labelTextYear)).toHaveValue(inputNumber);
      expect(screen.getByLabelText(labelTextDescription)).toHaveValue(
        inputText
      );
      expect(screen.getByLabelText(labelTextImage)).toHaveValue(inputText);
    });
  });

  describe("When the username and password input fields are fill and the button clicked", () => {
    test("Then the value of the username and password input fields should be empty", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <PropertyForm />
          </BrowserRouter>
        </Provider>
      );

      userEvent.type(screen.getByLabelText(labelTextTypeof), inputText);
      userEvent.type(screen.getByLabelText(labelTextAdress), inputText);
      userEvent.type(screen.getByLabelText(labelTextName), inputText);
      userEvent.type(screen.getByLabelText(labelTextSurface), inputText);
      userEvent.type(screen.getByLabelText(labelTextPrice), inputText);
      userEvent.type(screen.getByLabelText(labelTextBedrooms), inputText);
      userEvent.type(screen.getByLabelText(labelTextBathrooms), inputText);
      userEvent.type(screen.getByLabelText(labelTextYear), inputText);
      userEvent.type(screen.getByLabelText(labelTextDescription), inputText);
      userEvent.type(screen.getByLabelText(labelTextImage), inputText);

      const button = screen.getByRole("button");

      userEvent.click(button);

      expect(screen.getByLabelText(labelTextTypeof)).toHaveValue("");
      expect(screen.getByLabelText(labelTextAdress)).toHaveValue("");
      expect(screen.getByLabelText(labelTextName)).toHaveValue("");
      expect(screen.getByLabelText(labelTextSurface)).toHaveValue(0);
      expect(screen.getByLabelText(labelTextPrice)).toHaveValue(0);
      expect(screen.getByLabelText(labelTextBedrooms)).toHaveValue(0);
      expect(screen.getByLabelText(labelTextBathrooms)).toHaveValue(0);
      expect(screen.getByLabelText(labelTextYear)).toHaveValue(0);
      expect(screen.getByLabelText(labelTextDescription)).toHaveValue("");
      expect(screen.getByLabelText(labelTextImage)).toHaveValue("");
    });
  });
});
