import styled from "styled-components";
import { useAppDispatch } from "../../redux/hooks";
import { deletePropertyThunk } from "../../redux/thunks/propertyThunks/propertyThunks";

const ButtonContainer = styled.div`
  button {
    background: white;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    cursor: pointer;
  }

  button:hover {
    background: #ab001a;
  }
`;

interface Props {
  id: string;
}

const Button = ({ id }: Props): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleDelete = (event: any): void => {
    event.stopPropagation();
    dispatch(deletePropertyThunk(id));
  };

  return (
    <ButtonContainer>
      <button onClick={handleDelete}>X</button>
    </ButtonContainer>
  );
};

export default Button;
