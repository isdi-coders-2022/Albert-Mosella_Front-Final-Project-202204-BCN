import axios from "axios";
import { correctAction, wrongAction } from "../../../modals/modals";
import { IProperty } from "../../../types/types";
import { loadOnePropertyActionCreator } from "../../features/onePropertySlice";
import {
  deletePropertyActionCreator,
  createPropertyActionCreator,
  loadAllPropertiesActionCreator,
  editPropertyActionCreator,
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
  } catch {
    wrongAction("Something went wrong");
  }
};

export const deletePropertyThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      const token = localStorage.getItem("token");
      const { status } = await axios.delete(`${url}properties/${id}`, {
        headers: { authorization: `Bearer ${token}` },
      });
      if (status === 200) {
        correctAction("Property deleted!");
        dispatch(deletePropertyActionCreator(id));
      }
    } catch {
      wrongAction("Something went wrong deleting a property!");
    }
  };

export const createPropertyThunk =
  (formData: IProperty) => async (dispatch: AppDispatch) => {
    try {
      const token = localStorage.getItem("token");
      const { data: newProperty } = await axios.post(
        `${url}properties/`,
        formData,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );
      correctAction("Property created!");
      dispatch(loadPropertiesThunk());
      dispatch(createPropertyActionCreator(newProperty));
    } catch {
      wrongAction("Something went wrong creating a property!");
    }
  };

export const getOnePorpertyThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    const { data: property } = await axios.get(`${url}properties/${id}`);

    dispatch(loadOnePropertyActionCreator(property));
  };

export const editPorpertyThunk =
  (id: string, propertyData: any) => async (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token");
    const { data: updatedProperty } = await axios.put(
      `${url}properties/${id}`,
      propertyData,
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );
    correctAction("Property updated!");
    dispatch(loadPropertiesThunk());
    dispatch(editPropertyActionCreator(updatedProperty));
  };
