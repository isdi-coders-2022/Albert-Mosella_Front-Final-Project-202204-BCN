import axios from "axios";
import { loadAllPropertiesActionCreator } from "../../features/propertySlice";
import { AppDispatch } from "../../store/store";

const url = process.env.REACT_APP_API_URL;

export const loadPropertiesThunk = () => async (dispatch: AppDispatch) => {
  const { data } = await axios.get(`${url}properties/`);

  dispatch(loadAllPropertiesActionCreator(data));
};
