import styled from "styled-components";
import { useAppDispatch } from "../../redux/hooks";
import { deletePropertyThunk } from "../../redux/thunks/propertyThunks/propertyThunks";

const ButtonContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 336px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;
  box-shadow: 0px 32px 34px rgba(0, 0, 0, 0.133714);
  overflow: hidden;
  margin-top: 15px;

  button {
    width: 100%;
    height: 100%;
    background: white;
    cursor: pointer;

    border: none;
    font-size: 1.5em;
    font-family: "Abel", sans-serif;
  }

  button:hover {
    background: #ab001a;
    color: white;
  }
`;

interface Props {
  id: string;
}

const Button = ({ id }: Props): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleDelete = (): void => {
    dispatch(deletePropertyThunk(id));
  };

  return (
    <ButtonContainer>
      <button onClick={handleDelete}>Delete</button>
    </ButtonContainer>
  );
};

export default Button;
