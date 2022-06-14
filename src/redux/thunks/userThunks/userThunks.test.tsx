import { registerActionCreator } from "../../features/userSlice";
import { server } from "../mocks/server/server";
import { userLoginThunk, userRegisterThunk } from "./userThunks";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock("jwt-decode", () => jest.fn().mockResolvedValue({ id: "1" }));

describe("Given the loginUserThunk", () => {
  describe("When invoked", () => {
    test("Then the dispatch function should be called", async () => {
      const dispatch = jest.fn();
      const thunk = userLoginThunk({ username: "Albert", password: "123456" });
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a userRegisterThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch the registerActionCreator", async () => {
      const dispatch = jest.fn();

      const userData = {
        username: "Nois",
        name: "Nois",
        password: "Nois",
      };

      const mockUserRegister = {
        username: "Nois",
        name: "Nois",
        password: "Nois",
      };

      /* const registerAction =  */ registerActionCreator(mockUserRegister);

      const thunk = userRegisterThunk(userData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
