import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import propertyReducer from "../features/propertySlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    properties: propertyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
