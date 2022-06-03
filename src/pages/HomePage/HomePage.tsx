import PropertiesList from "../../components/PropertiesList/PropertiesList";
import HomePageContainer from "./HomePageStyles";

const HomePage = (): JSX.Element => {
  return (
    <HomePageContainer>
      <p>You are in good hands</p>
      <PropertiesList />
    </HomePageContainer>
  );
};

export default HomePage;
