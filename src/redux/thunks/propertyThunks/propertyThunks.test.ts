import { loadPropertiesThunk } from "./propertyThunks";
import { server } from "../mocks/server/server";
import { loadAllPropertiesActionCreator } from "../../features/propertySlice";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given a loadPropertiesThunk function", () => {
  describe("When it is called", () => {
    test("It should dispatch loadAllPropertiesActionCreator with api's data", async () => {
      const dispatch = jest.fn();
      const expectedData = [
        {
          typeOf: "House",
          adress: "Street 1",
          name: "Cal Pepe",
          surface: 150,
          price: 450000,
          bedrooms: 3,
          bathrooms: 2,
          year: 1988,
          description: "Casa to guapa",
          image: "casatoguapa.jpg",
          views: false,
          airConditioning: true,
          heating: true,
          parking: false,
          pool: true,
          fireplace: false,
          garden: true,
          laundryRoom: false,
          storage: true,
          terrace: true,
          id: "6299efd767d5ef56ab0e6bb8",
        },
      ];

      const expectedAction = loadAllPropertiesActionCreator(expectedData);

      const thunk = loadPropertiesThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
