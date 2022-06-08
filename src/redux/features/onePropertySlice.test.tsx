import mockProperty from "../../mocks/mockProperty";
import { loadOnePropertyActionCreator } from "./onePropertySlice";
import onePropertyReducer from "./onePropertySlice";

const initialState = {
  oneProperty: {
    typeOf: "",
    adress: "",
    name: "",
    surface: 0,
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    year: 0,
    description: "",
    image: "",
    views: false,
    airConditioning: false,
    heating: false,
    parking: false,
    pool: false,
    fireplace: false,
    garden: false,
    laundryRoom: false,
    storage: false,
    terrace: false,
    id: "",
  },
};

describe("Given the loadOnePropertyActionCreator", () => {
  describe("When invoked", () => {
    test("Then the initialState will contain a loaded property", () => {
      const expectedState = {
        oneProperty: mockProperty,
      };

      const action = loadOnePropertyActionCreator(mockProperty);
      const loadedState = onePropertyReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});
