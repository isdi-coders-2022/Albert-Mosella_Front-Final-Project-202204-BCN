import styled from "styled-components";

const FilterContainer = styled.div`
  margin: 20px 0;
  width: 200px;
  height: 40px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  .filter-options-container {
    display: flex;
    flex-direction: column;
    cursor: pointer;

    .filter-options {
      display: flex;
      justify-content: center;
      text-align: center;
      padding: 10px;
      z-index: 10;
      margin-top: 4px;
      height: 40px;
      cursor: pointer;
    }
  }
  .filter-options-container--hidden {
    z-index: -10;
    display: none;
  }
  button {
    background-color: white;
    color: black;
    border-radius: 0px;
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 25px;

    justify-content: space-around;

    span {
      padding-top: 6px;
      font-size: 1.3em;
    }

    img {
      width: 20px;
      padding-top: 5px;
    }
  }
`;

export default FilterContainer;
