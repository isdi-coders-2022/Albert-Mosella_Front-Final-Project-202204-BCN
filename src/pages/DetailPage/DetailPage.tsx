import DetailProperty from "../../components/DetailProperty/DetailProperty";
import DetailPageContainer from "./DetailPageStyles";

const DetailPage = (): JSX.Element => {
  return (
    <DetailPageContainer>
      <h2>Details</h2>
      <div className="decoration-line"></div>
      <DetailProperty />
    </DetailPageContainer>
  );
};

export default DetailPage;
