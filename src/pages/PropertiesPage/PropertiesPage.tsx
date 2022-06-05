import PropertiesList from "../../components/PropertiesList/PropertiesList";
import PropertiesPageContainer from "./PropertiesPageStyles";

const PropertiesPage = (): JSX.Element => {
  return (
    <PropertiesPageContainer>
      <h2>All properties</h2>
      <div className="decoration-line"></div>
      <PropertiesList />
    </PropertiesPageContainer>
  );
};

export default PropertiesPage;
