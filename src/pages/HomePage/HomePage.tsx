import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import HomePageContainer from "./HomePageStyles";

const HomePage = (): JSX.Element => {
  return (
    <HomePageContainer>
      <h2>You're in good hands</h2>
      <div className="decoration-line"></div>
      <p>
        Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne
        ferae quidem se repellere, idque instituit docere sic: omne animal,
        simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri,
        altera occulta quaedam et voluptatem accusantium doloremque.
      </p>
      <button className="long-button">Learn more</button>
      <img
        src="images/casa-portada.jpg"
        alt="rustik-house"
        className="photo-home"
      />
      <h3>Find your next place to live</h3>
      <div className="decoration-line"></div>
      <h3>Featured</h3>
      <FeaturedProperties />
    </HomePageContainer>
  );
};

export default HomePage;
