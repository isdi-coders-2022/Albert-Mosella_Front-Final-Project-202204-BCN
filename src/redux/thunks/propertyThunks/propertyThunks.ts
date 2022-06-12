import axios from "axios";
import { IProperty } from "../../../types/types";
import { loadOnePropertyActionCreator } from "../../features/onePropertySlice";
import {
  deletePropertyActionCreator,
  createPropertyActionCreator,
  loadAllPropertiesActionCreator,
} from "../../features/propertySlice";
import {
  setLoadedOffActionCreator,
  setLoadedOnActionCreator,
} from "../../features/ui/uiSlice";
import { AppDispatch } from "../../store/store";

const url = process.env.REACT_APP_API_URL;

export const loadPropertiesThunk = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoadedOffActionCreator());
    const { data } = await axios.get(`${url}properties/`);

    dispatch(loadAllPropertiesActionCreator(data));
    setTimeout(() => {
      dispatch(setLoadedOnActionCreator());
    }, 3000);
  } catch (error) {}
};

export const deletePropertyThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");
    const { status } = await axios.delete(`${url}properties/${id}`, {
      headers: { authorization: `Bearer ${token}` },
    });
    if (status === 200) {
      dispatch(deletePropertyActionCreator(id));
    }
  };

export const createPropertyThunk =
  (formData: IProperty) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");
    const { data: newProperty } = await axios.post(
      `${url}properties/`,
      formData,
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );

    dispatch(createPropertyActionCreator(newProperty));
  };

export const getOnePorpertyThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    const { data: property } = await axios.get(`${url}properties/${id}`);

    dispatch(loadOnePropertyActionCreator(property));
  };

export const editPorpertyThunk =
  (id: string, propertyData: any) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");
    const {
      data: { updatedProperty },
    } = await axios.put(`${url}properties/${id}`, propertyData, {
      headers: { authorization: `Bearer ${token}` },
    });

    if (updatedProperty) {
      dispatch(loadOnePropertyActionCreator(updatedProperty));
    }
  };
