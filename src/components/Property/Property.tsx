import { useNavigate } from "react-router-dom";
import { IProperty } from "../../types/types";
import Button from "../Button/Button";
import PropertyContainer from "./PropertySyles";

interface Props {
  property: IProperty;
}

const Property = (props: Props): JSX.Element => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const goToDetails = (): void => {
    navigate(`/detailpage/${props.property.id}`);
  };

  return (
    <PropertyContainer>
      <div onClick={goToDetails}>
        <img src={props.property.image} alt="house perspective" />
        <div className="property-title">
          <h4>{props.property.name}</h4>
          {token && <Button id={props.property.id} />}
          <span>{props.property.price}</span>
        </div>
        <ul className="property-icons">
          <li>
            <span>{props.property.bedrooms}</span>
            <img src="images/dormitorio.png" alt="" />
          </li>
          <li>
            <span>{props.property.bathrooms}</span>
            <img src="images/baño.png" alt="" />
          </li>
          <li>
            <span>{props.property.surface}</span>
            <img src="images/superficie.png" alt="" />
          </li>
        </ul>
      </div>
    </PropertyContainer>
  );
};

export default Property;
