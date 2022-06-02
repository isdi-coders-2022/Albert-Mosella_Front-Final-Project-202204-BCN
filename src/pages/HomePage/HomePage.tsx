import { NavLink } from "react-router-dom";

const HomePage = (): JSX.Element => {
  return (
    <>
      <p>You are in good hands</p>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </>
  );
};

export default HomePage;
