import RegisterForm from "../../components/RegisterForm/RegisterForm";
import styled from "styled-components";

const RegisterPage = (): JSX.Element => {
  const RegisterPageStyle = styled.div`
    text-align: center;

    a {
      text-decoration: none;
    }
  `;

  return (
    <RegisterPageStyle>
      <h2>User Register</h2>
      <RegisterForm />
    </RegisterPageStyle>
  );
};

export default RegisterPage;
