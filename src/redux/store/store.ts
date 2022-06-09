import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import propertyReducer from "../features/propertySlice";
import onePropertyReducer from "../features/onePropertySlice";
import uiReducer from "../features/ui/uiSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    properties: propertyReducer,
    oneProperty: onePropertyReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
