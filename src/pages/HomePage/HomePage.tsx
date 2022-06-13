import { useNavigate } from "react-router-dom";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import HomePageContainer from "./HomePageStyles";

const HomePage = (): JSX.Element => {
  const navigate = useNavigate();

  const toAbout = () => {
    navigate("/about");
  };

  return (
    <HomePageContainer>
      <img
        src="images/casa-portada.jpg"
        alt="rustik-house"
        className="photo-home"
      />
      <div className="decoration-line"></div>
      <h2>You're in good hands</h2>
      <div>
        <p>
          Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
          ne ferae quidem se repellere, idque instituit docere sic: omne animal,
          simul atque integre iudicante itaque aiunt hanc quasi involuta
          aperiri, altera occulta quaedam et voluptatem accusantium doloremque.
        </p>
        <button className="long-button" onClick={toAbout}>
          Learn more
        </button>
      </div>
      <h3>Find your next place to live</h3>
      <div className="decoration-line"></div>
      <h3>Featured</h3>
      <FeaturedProperties />
    </HomePageContainer>
  );
};

export default HomePage;
