import { NavLink } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPage = (): JSX.Element => {
  return (
    <>
      <h2>User Register</h2>
      <RegisterForm />
      <NavLink to="/login">Go back to Login</NavLink>
    </>
  );
};

export default RegisterPage;
