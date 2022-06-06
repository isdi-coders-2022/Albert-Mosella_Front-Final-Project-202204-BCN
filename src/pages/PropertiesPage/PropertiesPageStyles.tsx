import styled from "styled-components";

const PropertiesPageContainer = styled.div`
  background: #f5f5f5;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .decoration-line {
    width: 275px;
    height: 4px;
    background: linear-gradient(90deg, #ffac12 0%, #000000 94.96%);
    border-radius: 2px;
  }

  .long-button {
    margin-top: 15px;
    width: 250px;
    height: 40px;
    border-top-right-radius: 20px;
    background: black;
    font-size: 1em;
    text-align: left;
    border: none;
    color: #ffac12;
  }
`;

export default PropertiesPageContainer;
