import styled from "styled-components";

const LoadingPageContainer = styled.div`
  text-align: center;
  font-size: 4em;
`;

const NotFoundPage = (): JSX.Element => {
  return (
    <LoadingPageContainer>
      <p>Not Found!</p>
    </LoadingPageContainer>
  );
};

export default NotFoundPage;
