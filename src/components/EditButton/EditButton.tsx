import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const EditButtonContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 369px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;
  box-shadow: 0px 32px 34px rgba(0, 0, 0, 0.133714);
  overflow: hidden;
  margin-bottom: 50px;

  button {
    width: 100%;
    height: 100%;
    background: white;
    cursor: pointer;
    margin: 0px;
    border: none;
    font-size: 1.5em;
    font-family: "Abel", sans-serif;
  }

  button:hover {
    background: green;
    color: white;
  }

  @media (min-width: 700px) {
    width: 680px;
  }
`;

interface Props {
  id: string;
}

const EditButton = ({ id }: Props): JSX.Element => {
  const navigate = useNavigate();

  const handleEdit = (): void => {
    navigate(`/editproperty/${id}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <EditButtonContainer>
      <button onClick={handleEdit}>Edit</button>
    </EditButtonContainer>
  );
};

export default EditButton;
