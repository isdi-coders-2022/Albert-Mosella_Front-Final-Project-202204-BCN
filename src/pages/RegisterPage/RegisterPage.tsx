import RegisterForm from "../../components/RegisterForm/RegisterForm";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const RegisterPageStyle = styled.div`
  text-align: center;

  a {
    text-decoration: none;
  }
`;

const RegisterPage = (): JSX.Element => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (token) {
    navigate("/all-properties");
  }

  return (
    <RegisterPageStyle>
      <h2>User Register</h2>
      <RegisterForm />
    </RegisterPageStyle>
  );
};

export default RegisterPage;
