import {
  createPropertyThunk,
  deletePropertyThunk,
  getOnePorpertyThunk,
  loadPropertiesThunk,
} from "./propertyThunks";
import { server } from "../mocks/server/server";
import {
  createPropertyActionCreator,
  deletePropertyActionCreator,
  loadAllPropertiesActionCreator,
} from "../../features/propertySlice";
import { loadOnePropertyActionCreator } from "../../features/onePropertySlice";
import mockProperty from "../../../mocks/mockProperty";
import axios from "axios";
import * as toasters from "../../../modals/modals";

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

  describe("When loadPropertiesThunk it's invoked but there's no response", () => {
    test("Then it should call wrongAction toastify", async () => {
      const dispatch = jest.fn();
      const mockWrongAction = jest.spyOn(toasters, "wrongAction");

      axios.get = jest.fn().mockRejectedValueOnce(new Error());

      const thunk = await loadPropertiesThunk();
      await thunk(dispatch);

      expect(mockWrongAction).toHaveBeenLastCalledWith("Something went wrong");
    });
  });
});

describe("Given a getOnePorpertyThunk function", () => {
  describe("When it is called", () => {
    test("It should dispatch loadOnePropertyActionCreator with api's data", async () => {
      const dispatch = jest.fn();

      axios.get = jest
        .fn()
        .mockResolvedValue({ data: mockProperty, status: 200 });

      const expectedAction = loadOnePropertyActionCreator(mockProperty);

      const thunk = getOnePorpertyThunk(mockProperty.id);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});

describe("Given a deletePropertyThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch the deletePropertyActionCreator", async () => {
      const dispatch = jest.fn();

      const deleteAction = deletePropertyActionCreator(mockProperty.id);
      const thunk = deletePropertyThunk(mockProperty.id);

      await thunk(dispatch);
      expect(dispatch).toHaveBeenCalledWith(deleteAction);
    });
  });

  describe("When deletePropertyThunk it's invoked but an error ocurs", () => {
    test("Then it should call wrongAction toastify", async () => {
      const dispatch = jest.fn();

      const mockWrongAction = jest.spyOn(toasters, "wrongAction");
      axios.delete = jest.fn().mockRejectedValueOnce(new Error());

      const thunk = await deletePropertyThunk(mockProperty.id);
      await thunk(dispatch);

      expect(mockWrongAction).toHaveBeenLastCalledWith(
        "Something went wrong deleting a property!"
      );
    });
  });
});

describe("Given the createPropertyThunk thunk", () => {
  describe("When it receives a property and data from response api", () => {
    test("Then it should call dispatch with createPropertyActionCreator", async () => {
      const newPost = mockProperty;
      const mockAxiosReturn = {
        status: 201,
        data: mockProperty,
      };
      const dispatch = jest.fn();
      const createPropertyThunkTest = createPropertyThunk(newPost);
      const expectedAction = createPropertyActionCreator(newPost);
      axios.post = jest.fn().mockResolvedValue(mockAxiosReturn);

      await createPropertyThunkTest(dispatch);

      expect(dispatch).toHaveBeenNthCalledWith(1, expectedAction);
    });
  });

  describe("When createPropertyThunk it's invoked but an error occurs", () => {
    test("Then it should call wrongAction toastify", async () => {
      const mockWrongAction = jest.spyOn(toasters, "wrongAction");

      axios.post = jest.fn().mockRejectedValueOnce(new Error());
      const dispatch = jest.fn();

      const thunk = await createPropertyThunk(mockProperty);
      await thunk(dispatch);

      expect(mockWrongAction).toHaveBeenLastCalledWith(
        "Something went wrong creating a property!"
      );
    });
  });
});
