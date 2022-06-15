import styled from "styled-components";

const PropertiesListContainer = styled.div`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    padding-left: 10px;
  }

  li {
    list-style: none;
    margin-bottom: 40px;
  }

  .page-buttons {
    margin-bottom: 25px;
    padding-left: 8px;
    width: 315px;
    display: flex;
    justify-content: space-between;
    button {
      border-radius: 25px;
      box-shadow: 0px 32px 34px rgba(0, 0, 0, 0.133714);
      width: 20%;
      height: 50px;
      background-color: white;
      border: none;
      font-size: 1.2em;
      cursor: pointer;
    }
    button:hover {
      background: green;
      color: white;
    }
  }

  @media (min-width: 700px) {
    ul {
      display: grid;
      grid-template-columns: repeat(2, 350px);
      grid-template-rows: repeat(3, 500px);
      grid-gap: 2px 1px;

      li {
        margin: 0 10px;
      }
    }
    .page-buttons {
      width: 650px;
    }
  }

  @media (min-width: 1000px) {
    ul {
      display: grid;
      grid-template-columns: repeat(3, 350px);
      grid-template-rows: repeat(2, 500px);
      grid-gap: 2px 1px;

      li {
        margin: 0 10px;
      }
    }
  }
`;
export default PropertiesListContainer;
