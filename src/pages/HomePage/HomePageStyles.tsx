import styled from "styled-components";

const HomePageContainer = styled.div`
  background: #f5f5f5;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 1.7em;
  }

  h3 {
    font-size: 1.7em;
    padding: 0px;
    margin: 10px 0;
  }

  .decoration-line {
    width: 275px;
    height: 4px;
    background: linear-gradient(90deg, #ffac12 0%, #000000 94.96%);
    border-radius: 2px;
  }

  p {
    margin: 15px 35px;
  }

  .long-button {
    margin-right: 20px;
    width: 250px;
    height: 40px;
    border-top-right-radius: 20px;
    background: black;
    font-size: 1em;
    text-align: left;
    border: none;
    color: #ffac12;
  }

  .photo-home {
    width: 100%;
    margin: 20px;
  }
`;

export default HomePageContainer;
