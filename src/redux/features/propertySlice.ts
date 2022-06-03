import { createSlice } from "@reduxjs/toolkit";

const propertySlice = createSlice({
  name: "properties",
  initialState: {
    allProperties: [],
  },
  reducers: {
    loadAllProperties: (properties, action) => ({
      ...properties,
      allProperties: action.payload,
    }),
  },
});

export default propertySlice.reducer;

export const { loadAllProperties: loadAllPropertiesActionCreator } =
  propertySlice.actions;
