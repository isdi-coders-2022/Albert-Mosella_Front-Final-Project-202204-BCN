import { createSlice } from "@reduxjs/toolkit";
import { IProperty } from "../../types/types";

interface PropertiesState {
  allProperties: IProperty[];
}

const initialState: PropertiesState = {
  allProperties: [],
};

const propertySlice = createSlice({
  name: "properties",
  initialState,
  reducers: {
    loadAllProperties: (properties, action): PropertiesState => ({
      ...properties,
      allProperties: action.payload,
    }),
    deleteProperty: (properties, action): PropertiesState => ({
      allProperties: properties.allProperties.filter(
        (property: IProperty) => property.id !== action.payload
      ),
    }),
  },
});

export default propertySlice.reducer;

export const {
  loadAllProperties: loadAllPropertiesActionCreator,
  deleteProperty: deletePropertyActionCreator,
} = propertySlice.actions;
