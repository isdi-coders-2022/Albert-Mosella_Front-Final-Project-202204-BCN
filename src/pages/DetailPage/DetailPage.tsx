import { NavLink } from "react-router-dom";
import DetailPageContainer from "./DetailPageStyles";

const DetailPage = (): JSX.Element => {
  return (
    <DetailPageContainer>
      <h2>Details</h2>
      <div className="decoration-line"></div>
      <NavLink to={"/home"}>
        <button className="long-button">Back to home</button>
      </NavLink>
    </DetailPageContainer>
  );
};

export default DetailPage;
