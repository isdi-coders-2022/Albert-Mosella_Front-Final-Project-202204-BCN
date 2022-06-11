import styled from "styled-components";

const DetailPropertyContainer = styled.div`
  .image-container {
    padding: 25px 0;

    img {
      width: 369px;
      height: 292px;
      border-radius: 0 70px 0 0;
    }
  }
  .main-details {
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 336px;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    border-radius: 25px;
    box-shadow: 0px 32px 34px rgba(0, 0, 0, 0.133714);
    .property-title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #e4e4e4;
      h4 {
        font-size: 1.2em;
      }
    }
    span {
      font-size: 1.2em;
    }
    .property-icons {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 20px;
      list-style: none;
      margin: auto;
      text-align: center;

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
  }
  .description {
    width: 336px;
    padding: 20px;
    background-color: white;
    border-radius: 25px;
    box-shadow: 0px 32px 34px rgba(0, 0, 0, 0.133714);
  }

  .features {
    width: 336px;
    padding: 20px 0 20px 35px;
    margin-bottom: 20px;
    background-color: white;
    border-radius: 25px;
    box-shadow: 0px 32px 34px rgba(0, 0, 0, 0.133714);
    display: flex;
    align-items: center;
    ul {
      padding-left: 25px;
      li {
        list-style: none;
        text-align: left;
        display: flex;
        align-items: center;

        img {
          width: 25px;
          height: 25px;
          padding-right: 5px;
        }
        .uncheck {
          padding-left: 2px;
          width: 22px;
          height: 22px;
        }
      }
    }
  }
`;

export default DetailPropertyContainer;
