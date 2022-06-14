import styled from "styled-components";

const PropertyContainer = styled.div`
  width: 315px;
  height: 418px;
  border-radius: 25px;
  margin-bottom: 65px;
  background-color: white;
  box-shadow: 0px 32px 34px rgba(0, 0, 0, 0.133714);
  cursor: pointer;
  transition: all 0.4s ease;

  :hover {
    transform: scale(1.05);
  }

  .image-container {
    width: 315px;
    height: 250px;
    border-radius: 25px 25px 0 0;
    overflow: hidden;

    img {
      height: 240px;
      top: 50%;
      left: 50%;
    }
  }

  .property-title {
    display: flex;
    justify-content: space-between;
    height: 60px;
    align-items: center;
    padding: 0 20px;
    border-bottom: 2px solid #e4e4e4;
    h4 {
      font-size: 1.5em;
    }
  }

  span {
    font-size: 1.2em;
  }

  .property-icons {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    list-style: none;
    margin: auto;

    li {
      display: flex;
      align-items: center;
      border-right: 2px solid #e4e4e4;
      img {
        width: 25px;
        height: 25px;
        margin: 5px;
      }
    }
  }
`;

export default PropertyContainer;
