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
    createProperty: (properties, action) => ({
      ...properties,
      allProperties: [...properties.allProperties, action.payload],
    }),
    editProperty: (properties, action) => ({
      ...properties,
      allProperties: properties.allProperties.map((property) =>
        property.id === action.payload.id ? action.payload : property
      ),
    }),
  },
});

export default propertySlice.reducer;

export const {
  loadAllProperties: loadAllPropertiesActionCreator,
  deleteProperty: deletePropertyActionCreator,
  createProperty: createPropertyActionCreator,
  editProperty: editPropertyActionCreator,
} = propertySlice.actions;
