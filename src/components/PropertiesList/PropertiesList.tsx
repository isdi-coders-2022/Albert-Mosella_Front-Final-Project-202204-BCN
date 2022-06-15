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
          className="end-button"
          onClick={() => {
            if (index >= 9) {
              setIndex(0);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          }}
        >
          {"<<"}
        </button>
        <button
          onClick={() => {
            if (index >= 9) {
              setIndex(index - 9);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            if (index < props.allProperties.length - 9) {
              setIndex(index + 9);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          }}
        >
          Next
        </button>
        <button
          onClick={() => {
            if (index < props.allProperties.length - 9) {
              setIndex(27);
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          }}
        >
          {">>"}
        </button>
      </div>
    </PropertiesListContainer>
  );
};

export default PropertiesList;
