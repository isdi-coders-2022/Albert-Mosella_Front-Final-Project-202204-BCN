import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProperty } from "../../types/types";

interface PropertyState {
  oneProperty: IProperty;
}

const initialState: PropertyState = {
  oneProperty: {
    typeOf: "",
    adress: "",
    name: "",
    surface: 0,
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    year: 0,
    description: "",
    image: "",
    views: false,
    airConditioning: false,
    heating: false,
    parking: false,
    pool: false,
    fireplace: false,
    garden: false,
    laundryRoom: false,
    storage: false,
    terrace: false,
    id: "",
  },
};

const onePropertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    loadOneProperty: (property, action: PayloadAction<IProperty>) => ({
      oneProperty: { ...action.payload },
    }),
  },
});

export default onePropertySlice.reducer;

export const { loadOneProperty: loadOnePropertyActionCreator } =
  onePropertySlice.actions;
