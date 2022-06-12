import styled from "styled-components";

const ButtonContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 315px;
  height: 35px;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;
  box-shadow: 0px 32px 34px rgba(0, 0, 0, 0.133714);
  overflow: hidden;
  margin-top: 5px;

  button {
    width: 100%;
    height: 100%;
    background: white;
    cursor: pointer;

    border: none;
    font-size: 1.3em;
    font-family: "Abel", sans-serif;
  }

  button:hover {
    background: #ab001a;
    color: white;
  }

  @media (min-width: 700px) {
    margin-top: 40px;
  }
`;

export default ButtonContainer;
