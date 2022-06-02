import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: black;

  header {
    margin: 0;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .company-logo {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  h1 {
    color: white;
    text-align: center;
    font-size: 1.2em;
  }

  img {
    width: 40px;
  }

  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    margin: 0px;
    padding: 0px;

    li {
      padding: 10px 20px;
      button {
        margin-right: 20px;
        width: 80px;
        height: 30px;
        border-top-right-radius: 20px;
        background: orange;
        font-size: 1em;
        text-align: left;
      }
    }

    a {
      color: white;
      text-decoration: none;
      font-size: 1.2em;
      transition: 0.3s;
    }

    a:hover {
      color: #dedc8a;
    }
  }
`;

export default HeaderContainer;
