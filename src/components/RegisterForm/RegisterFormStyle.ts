import styled from "styled-components";

const RegisterFormStyle = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2em;
  padding-bottom: 30px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    border-radius: 25px;
    box-shadow: 0px 32px 34px rgba(0, 0, 0, 0.133714);
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px 0 5px;
  }

  input {
    height: 40px;
    width: 80%;
    margin-top: 10px;
    font-family: inherit;
    font-size: 0.9em;
    border-radius: 10px;
    border: 2px solid #ebebeb;
  }

  .form-button {
    padding: 10px 45px;
    margin: 25px 0;
    border: none;
    font-size: 0.8em;
    text-transform: uppercase;
    font-weight: bold;
    background-color: black;
    color: orange;
    cursor: pointer;
    border-top-right-radius: 20px;
  }

  a {
    padding: 0 0 15px;
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
`;

export default RegisterFormStyle;
