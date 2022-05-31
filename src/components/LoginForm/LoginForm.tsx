import { useState } from "react";
import { useDispatch } from "react-redux";
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
    if (formValues.username === "" || formValues.password === "") {
      return;
    }
    dispatch(userLoginThunk(formValues));
    setFormValues(initialFormValue);
  };
  return (
    <>
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
          <button className="form-button" type="submit">
            Login
          </button>
        </form>
      </LoginFormStyle>
      ;
    </>
  );
};

export default LoginForm;
