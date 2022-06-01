import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { userRegisterThunk } from "../../redux/thunks/userThunks/userThunks";

import RegisterFormStyle from "./RegisterFormStyle";

const RegisterForm = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();

  const initialFormValue = {
    name: "",
    username: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialFormValue);

  const handleInputChange = (event: {
    target: { id: string; value: string };
  }) => {
    setFormValues({ ...formValues, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(userRegisterThunk(formValues));
    setFormValues(initialFormValue);
  };
  return (
    <>
      <RegisterFormStyle>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={formValues.name}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={formValues.username}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formValues.password}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <button
            className="form-button"
            type="submit"
            disabled={
              formValues.username === "" ||
              formValues.password === "" ||
              formValues.name === ""
            }
          >
            Register
          </button>
        </form>
      </RegisterFormStyle>
      ;
    </>
  );
};

export default RegisterForm;