import { server } from "../mocks/server/server";
import { userLoginThunk } from "./userThunks";

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
