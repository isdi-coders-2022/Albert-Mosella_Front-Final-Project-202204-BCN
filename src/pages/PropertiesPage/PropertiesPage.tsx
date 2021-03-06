import { useNavigate } from "react-router-dom";
import FilterPrice from "../../components/FilterPrice/FilterPrice";
import { blankStateActionCreator } from "../../redux/features/onePropertySlice";
import { useAppDispatch } from "../../redux/hooks";
import PropertiesPageContainer from "./PropertiesPageStyles";

const PropertiesPage = (): JSX.Element => {
  const token = localStorage.getItem("token");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleCreateNewProperty = () => {
    dispatch(blankStateActionCreator());
    navigate("/propertyform");
  };

  return (
    <PropertiesPageContainer>
      <h2>All properties</h2>
      <div className="decoration-line"></div>
      {token && (
        <button onClick={handleCreateNewProperty} className="long-button">
          Add a new property
        </button>
      )}
      <FilterPrice />
    </PropertiesPageContainer>
  );
};

export default PropertiesPage;
