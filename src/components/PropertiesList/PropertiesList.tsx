import { useEffect, useState } from "react";

import { IProperty } from "../../types/types";
import Property from "../Property/Property";
import PropertiesListContainer from "./PropertiesListStyles";

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
      <div className="page-buttons">
        <button
          onClick={() => {
            if (index >= 9) {
              setIndex(index - 9);
            }
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            if (index < props.allProperties.length - 9) {
              setIndex(index + 9);
            }
          }}
        >
          Next
        </button>
      </div>
    </PropertiesListContainer>
  );
};

export default PropertiesList;
