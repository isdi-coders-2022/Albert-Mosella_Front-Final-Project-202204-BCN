import styled from "styled-components";

const PropertiesListContainer = styled.div`
  background: #f5f5f5;
`;

const PropertiesList = (): JSX.Element => {
  return (
    <PropertiesListContainer>
      <ul>
        {/* {properties.map((property) => (
          <li key={property.name}>
            <Property property={property} />
          </li>
        ))} */}
      </ul>
    </PropertiesListContainer>
  );
};

export default PropertiesList;
