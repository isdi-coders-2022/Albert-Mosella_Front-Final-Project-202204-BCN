import { useAppDispatch } from "../../redux/hooks";
import { deletePropertyThunk } from "../../redux/thunks/propertyThunks/propertyThunks";
import ButtonContainer from "./ButtonStyles";

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
      <button onClick={handleDelete}>Delete</button>
    </ButtonContainer>
  );
};

export default Button;
