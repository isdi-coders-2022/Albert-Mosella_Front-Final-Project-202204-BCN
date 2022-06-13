import mockProperty from "../../mocks/mockProperty";
import { mockProperties } from "../thunks/mocks/handlers/handlers";
import propertySlice from "./propertySlice";
import propertyReducer, {
  createPropertyActionCreator,
  deletePropertyActionCreator,
  editPropertyActionCreator,
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

describe("Given a createProperty reducer", () => {
  describe("When it receives an action to create a new property", () => {
    test("Then it should create a new property", () => {
      const initialState = {
        allProperties: mockProperties,
      };
      const createAction = createPropertyActionCreator(mockProperty);

      const expectedState = {
        allProperties: [...mockProperties, mockProperty],
      };

      const propertyStatus = propertyReducer(initialState, createAction);
      expect(propertyStatus).toEqual(expectedState);
    });
  });
});

describe("Given a edit Property Reducer", () => {
  describe("When it receives an initial state with an array of properties and a edit property action with the updated property", () => {
    test("Then it should return a new property state with the array with the updated property", () => {
      const initialState = {
        allProperties: mockProperties,
      };

      const updatedProperty = mockProperty;

      const editPropertyAction = editPropertyActionCreator(updatedProperty);

      const expectedNewState = {
        allProperties: [updatedProperty],
      };

      const propertyStatus = propertySlice(initialState, editPropertyAction);

      expect(propertyStatus).toEqual(expectedNewState);
    });
  });
});
