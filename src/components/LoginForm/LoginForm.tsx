import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppDispatch } from "../../redux/store/store";
import { userLoginThunk } from "../../redux/thunks/userThunks/userThunks";
import LoginFormStyle from "./LoginFormStyle";

const LoginForm = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();

  const initialFormValue = {
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
    dispatch(userLoginThunk(formValues));
    setFormValues(initialFormValue);
  };

  return (
    <LoginFormStyle>
      <form onSubmit={handleSubmit} noValidate>
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
          disabled={formValues.username === "" || formValues.password === ""}
        >
          Login
        </button>
        <NavLink to="/register">Register</NavLink>
      </form>
    </LoginFormStyle>
  );
};

export default LoginForm;
