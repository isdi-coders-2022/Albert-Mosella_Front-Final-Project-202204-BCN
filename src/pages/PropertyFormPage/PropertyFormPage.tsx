import PropertyForm from "../../components/PropertyForm/PropertyForm";

import styled from "styled-components";

const PropertyFormPageContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const PropertyFormPage = (): JSX.Element => {
  return (
    <PropertyFormPageContainer>
      <h2>Create or edit a property</h2>
      <PropertyForm />
    </PropertyFormPageContainer>
  );
};

export default PropertyFormPage;
