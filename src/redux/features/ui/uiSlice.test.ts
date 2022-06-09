import uiReducer, {
  setLoadedOffActionCreator,
  setLoadedOnActionCreator,
} from "./uiSlice";

describe("Given a uiSlice reducer", () => {
  describe("When it receives a loaded off action", () => {
    test("Then it should switch the state to false", () => {
      const initialState = {
        loaded: true,
      };
      const expectedState = { loaded: false };

      const loadOffAction = setLoadedOffActionCreator();
      const loadedOff = uiReducer(initialState, loadOffAction);

      expect(loadedOff).toEqual(expectedState);
    });
  });

  describe("When it receives a loaded on action", () => {
    test("Then it should switch the state to true", () => {
      const initialState = {
        loaded: false,
      };
      const expectedState = { loaded: true };

      const loadOnAction = setLoadedOnActionCreator();
      const loadedOff = uiReducer(initialState, loadOnAction);

      expect(loadedOff).toEqual(expectedState);
    });
  });
});
