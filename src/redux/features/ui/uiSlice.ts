import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loaded: false,
  },
  reducers: {
    setLoadedOn: (ui) => ({ ...ui, loaded: true }),
    setLoadedOff: (ui) => ({ ...ui, loaded: false }),
  },
});

export const {
  setLoadedOff: setLoadedOffActionCreator,
  setLoadedOn: setLoadedOnActionCreator,
} = uiSlice.actions;

export default uiSlice.reducer;
