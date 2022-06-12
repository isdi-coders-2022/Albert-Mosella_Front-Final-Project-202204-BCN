import { useEffect, useState } from "react";
import styled from "styled-components";
import { IProperty } from "../../types/types";
import Property from "../Property/Property";

const PropertiesListContainer = styled.div`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    padding-left: 10px;
  }

  li {
    list-style: none;
    margin-bottom: 40px;
  }

  button {
    width: 100px;
    height: 100px;
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

interface Props {
  allProperties: IProperty[];
}

const PropertiesList = (props: Props): JSX.Element => {
  let initialPage: IProperty[] = [];

  const [currentPage, setCurrentPage] = useState(initialPage);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setCurrentPage(props.allProperties.slice(0, 9));
  }, [props.allProperties]);

  useEffect(() => {
    setCurrentPage(props.allProperties.slice(index, index + 9));
  }, [index, props.allProperties]);

  return (
    <PropertiesListContainer>
      <ul>
        {currentPage.map((property: IProperty) => (
          <li key={property.name}>
            <Property property={property} />
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          if (index < props.allProperties.length - 9) {
            setIndex(index + 9);
          }
        }}
      >
        Next
      </button>
      <button
        onClick={() => {
          if (index >= 9) {
            setIndex(index - 9);
          }
        }}
      >
        Prev
      </button>
    </PropertiesListContainer>
  );
};

export default PropertiesList;
