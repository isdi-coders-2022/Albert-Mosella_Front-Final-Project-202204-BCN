import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const EditButtonContainer = styled.div`
  button {
    background: white;
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
`;

interface Props {
  id: string;
}

const EditButton = ({ id }: Props): JSX.Element => {
  const navigate = useNavigate();

  const handleEdit = (): void => {
    navigate(`/editproperty/${id}`);
  };

  return (
    <EditButtonContainer>
      <button onClick={handleEdit}>E</button>
    </EditButtonContainer>
  );
};

export default EditButton;
