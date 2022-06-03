import PropertyContainer from "./PropertySyles";

const Property = (/* property: IProperty */): JSX.Element => {
  return (
    <PropertyContainer>
      <img src="images/casa.jpg" alt="una puta casa" />
      <div className="property-title">
        <h2>Casa de mierda</h2>
        <span>450.000€</span>
      </div>
      <ul className="property-icons">
        <li>
          <span>3</span>
          <img src="images/dormitorio.png" alt="" />
        </li>
        <li>
          <span>2</span>
          <img src="images/baño.png" alt="" />
        </li>
        <li>
          <span>150</span>
          <img src="images/superficie.png" alt="" />
        </li>
      </ul>
    </PropertyContainer>
  );
};

export default Property;
