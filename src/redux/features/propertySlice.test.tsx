import { mockProperties } from "../thunks/mocks/handlers/handlers";
import propertyReducer, {
  deletePropertyActionCreator,
  loadAllPropertiesActionCreator,
} from "./propertySlice";

const initialState = {
  allProperties: [],
};

describe("Given the loadAllPropertiesActionCreator", () => {
  describe("When invoked", () => {
    test("Then the initialstate will contain the loaded properties", () => {
      const expectedState = {
        allProperties: mockProperties,
      };

      const action = loadAllPropertiesActionCreator(mockProperties);
      const loadedState = propertyReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the deletePropertyActionCreator", () => {
  describe("When invoked with the id to be deleted", () => {
    test("Then the item with the id will be deleted from the propierties list", () => {
      const initialState = {
        allProperties: mockProperties,
      };

      const expectedState = {
        allProperties: [],
      };

      const id = "6299efd767d5ef56ab0e6bb8";

      const action = deletePropertyActionCreator(id);
      const loadedState = propertyReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});
