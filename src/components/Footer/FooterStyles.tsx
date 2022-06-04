import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  height: 600px;
  background-color: black;
  color: white;
  justify-content: center;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  .decoration-line {
    width: 275px;
    height: 4px;
    background: linear-gradient(90deg, #ffac12 0%, #000000 94.96%);
    border-radius: 2px;
  }

  span {
    font-size: 1.7em;
    padding: 25px 0;
  }

  .company-logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    img {
      width: 60px;
    }
  }

  p {
    padding: 30px;
    font-size: 1.2em;
  }

  .icon {
    display: inline-block;
    animation: float 5s ease-in-out infinite;
  }

  .face {
    animation-delay: 1s;
  }

  .whatsapp {
    animation-delay: 2s;
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export default FooterContainer;
