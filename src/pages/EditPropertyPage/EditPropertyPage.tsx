import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import PropertyForm from "../../components/PropertyForm/PropertyForm";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { getOnePorpertyThunk } from "../../redux/thunks/propertyThunks/propertyThunks";

const EditPropertyPageContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const EditPropertyPage = (): JSX.Element => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOnePorpertyThunk(id as string));
  }, [dispatch, id]);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/allproperties");
  }

  return (
    <EditPropertyPageContainer>
      <h2>Edit a property</h2>
      <PropertyForm />
    </EditPropertyPageContainer>
  );
};

export default EditPropertyPage;
