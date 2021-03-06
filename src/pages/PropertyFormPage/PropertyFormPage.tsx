import PropertyForm from "../../components/PropertyForm/PropertyForm";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PropertyFormPageContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const PropertyFormPage = (): JSX.Element => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/all-properties");
  }

  return (
    <PropertyFormPageContainer>
      <h2>Create a property</h2>
      <PropertyForm />
    </PropertyFormPageContainer>
  );
};

export default PropertyFormPage;
