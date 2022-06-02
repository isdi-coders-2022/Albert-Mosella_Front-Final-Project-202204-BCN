import LoginForm from "../../components/LoginForm/LoginForm";
import styled from "styled-components";

const LoginPageStyle = styled.div`
  text-align: center;

  a {
    text-decoration: none;
  }
`;

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyle>
      <h2>User Login</h2>
      <LoginForm />
    </LoginPageStyle>
  );
};

export default LoginPage;
