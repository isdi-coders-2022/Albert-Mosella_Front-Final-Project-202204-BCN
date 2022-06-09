import { IProperty } from "../../types/types";
import Button from "../Button/Button";
import EditButton from "../EditButton/EditButton";
import PropertyContainer from "./PropertySyles";

interface Props {
  property: IProperty;
}

const Property = (props: Props): JSX.Element => {
  const token = localStorage.getItem("token");

  /* const url = "http://localhost:4000/"; */
  const url = process.env.REACT_APP_API_URL;

  return (
    <PropertyContainer>
      <img src={`${url}${props.property.image}`} alt="una puta casa" />
      <div className="property-title">
        <h4>{props.property.name}</h4>
        {token && <Button id={props.property.id} />}
        {token && <EditButton id={props.property.id} />}
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
    </PropertyContainer>
  );
};

export default Property;
