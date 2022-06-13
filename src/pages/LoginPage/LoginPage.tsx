import LoginForm from "../../components/LoginForm/LoginForm";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginPageStyle = styled.div`
  text-align: center;

  a {
    text-decoration: none;
  }
`;

const LoginPage = (): JSX.Element => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (token) {
    navigate("/all-properties");
  }

  return (
    <LoginPageStyle>
      <h2>User Login</h2>
      <LoginForm />
    </LoginPageStyle>
  );
};

export default LoginPage;
