import styled from "styled-components";
import { useAppSelector } from "../../redux/hooks";
import { IProperty } from "../../types/types";
import Property from "../Property/Property";

const FeaturedPropertiesContainer = styled.div`
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    padding-left: 10px;
  }

  li {
    list-style: none;
    margin-bottom: 40px;
  }

  @media (min-width: 700px) {
    ul {
      display: grid;
      grid-template-columns: repeat(2, 350px);
      grid-template-rows: repeat(3, 500px);
      grid-gap: 2px 1px;

      li {
        margin: 0 10px;
      }
    }
  }

  @media (min-width: 1000px) {
    ul {
      display: grid;
      grid-template-columns: repeat(3, 350px);
      grid-template-rows: repeat(2, 500px);
      grid-gap: 2px 1px;

      li {
        margin: 0 10px;
      }
    }
  }
`;

const FeaturedProperties = (): JSX.Element => {
  const allProperties: IProperty[] = useAppSelector(
    (state) => state.properties.allProperties
  );

  return (
    <FeaturedPropertiesContainer>
      <ul>
        {allProperties.slice(0, 6).map((property: IProperty) => (
          <li key={property.id}>
            <Property property={property} />
          </li>
        ))}
      </ul>
    </FeaturedPropertiesContainer>
  );
};

export default FeaturedProperties;
