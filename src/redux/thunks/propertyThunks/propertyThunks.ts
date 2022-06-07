import axios from "axios";
import { IProperty } from "../../../types/types";
import { loadOnePropertyActionCreator } from "../../features/onePropertySlice";
import {
  deletePropertyActionCreator,
  loadAllPropertiesActionCreator,
} from "../../features/propertySlice";
import { AppDispatch } from "../../store/store";

const url = process.env.REACT_APP_API_URL;

export const loadPropertiesThunk = () => async (dispatch: AppDispatch) => {
  const { data } = await axios.get(`${url}properties/`);

  dispatch(loadAllPropertiesActionCreator(data));
};

export const deletePropertyThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    const { status } = await axios.delete(`${url}properties/${id}`);

    if (status === 200) {
      dispatch(deletePropertyActionCreator(id));
    }
  };

export const createPropertyThunk =
  (formData: IProperty) => async (dispatch: AppDispatch) => {
    await axios.post(`${url}properties/`, formData);
  };

export const getOnePorpertyThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    const { data: property } = await axios.get(`${url}properties/${id}`);

    dispatch(loadOnePropertyActionCreator(property));
  };
