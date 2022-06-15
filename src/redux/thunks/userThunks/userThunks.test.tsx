import axios from "axios";
import { registerActionCreator } from "../../features/userSlice";
import { server } from "../mocks/server/server";
import { userLoginThunk, userRegisterThunk } from "./userThunks";
import * as toasters from "../../../modals/modals";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

jest.mock("jwt-decode", () => jest.fn().mockResolvedValue({ id: "1" }));

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

      registerActionCreator(mockUserRegister);

      const thunk = userRegisterThunk(userData);

      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given the userLoginThunk", () => {
  describe("When invoked", () => {
    test("Then the dispatch function should be called", async () => {
      const dispatch = jest.fn();
      const thunk = userLoginThunk({ username: "Albert", password: "123456" });
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When it's invoked with incorrect user data", () => {
    test("Then it should call the wrong action toast", async () => {
      const dispatch = jest.fn();
      const mockWrongAction = jest.spyOn(toasters, "wrongAction");

      const userData = {
        username: "Error",
        password: "Error",
      };
      axios.post = jest.fn().mockRejectedValueOnce(new Error());

      const thunk = await userLoginThunk(userData);
      await thunk(dispatch);

      expect(mockWrongAction).toHaveBeenLastCalledWith(
        "User or password incorrect"
      );
    });
  });
});

describe("Given the userRegisterThunk", () => {
  describe("When it's invoked with incorrect user data", () => {
    test("Then it should call the wrong action toast", async () => {
      const dispatch = jest.fn();
      const mockWrongAction = jest.spyOn(toasters, "wrongAction");

      const userData = {
        username: "Error",
        password: "Error",
        name: "Error",
      };
      axios.post = jest.fn().mockRejectedValueOnce(new Error());

      const thunk = await userRegisterThunk(userData);
      await thunk(dispatch);

      expect(mockWrongAction).toHaveBeenLastCalledWith("User already exists!");
    });
  });
});
