import styled from "styled-components";

const LoadingPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .loader {
    width: 120px;
    height: 75px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
  }
  .loader span {
    font-size: 22px;
    text-transform: uppercase;
    margin: auto;
    color: orange;
  }
  .ball {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: orange;
    animation: bounce 0.5s alternate infinite;
    outline: 2px solid white;
    /* outline-offset: 6px; */
  }
  .ball:nth-child(2) {
    animation-delay: 0.16s;
  }
  .ball:nth-child(3) {
    animation-delay: 0.32s;
  }
  @keyframes bounce {
    from {
      transform: scaleX(1.25);
    }
    to {
      transform: translateY(-50px) scaleX(1);
    }
  }
`;

export default LoadingPageContainer;
