import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: black;
  color: white;
  justify-content: center;
  text-align: center;

  .company-logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    img {
      width: 60px;
    }
  }

  p {
    padding: 30px;
    font-size: 1.2em;
  }
`;

export default FooterContainer;
