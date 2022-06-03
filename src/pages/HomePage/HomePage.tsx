import Property from "../../components/Property/Property";
import HomePageContainer from "./HomePageStyles";

const HomePage = (): JSX.Element => {
  return (
    <HomePageContainer>
      <p>You are in good hands</p>
      <Property />
    </HomePageContainer>
  );
};

export default HomePage;
