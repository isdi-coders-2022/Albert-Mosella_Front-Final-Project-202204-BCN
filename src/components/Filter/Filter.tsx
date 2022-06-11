import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { IProperty } from "../../types/types";
import PropertiesList from "../PropertiesList/PropertiesList";
import FilterContainer from "./FilterStyles";

const Filter = () => {
  const [dropdownPriceOptionsStatus, setDropdownPriceOptionsStatus] =
    useState(false);

  const deployPriceOptions = () => {
    dropdownPriceOptionsStatus
      ? setDropdownPriceOptionsStatus(false)
      : setDropdownPriceOptionsStatus(true);
  };

  const allProperties: IProperty[] = useAppSelector(
    (state) => state.properties.allProperties
  );

  const initialState: IProperty[] = [];

  const [filterProperties, setFilterProperties] = useState(initialState);

  useEffect(() => {
    setFilterProperties(allProperties);
  }, [allProperties]);

  const filterByPrice = (option: number) => {
    let filteredByPriceProperties = [];
    switch (option) {
      case 0:
        filteredByPriceProperties = allProperties;
        break;
      case 1:
        filteredByPriceProperties = allProperties.filter(
          (property) => property.price < 200000
        );
        break;
      case 2:
        filteredByPriceProperties = allProperties.filter(
          (property) => property.price < 400000
        );
        break;
      case 3:
        filteredByPriceProperties = allProperties.filter(
          (property) => property.price < 600000
        );
        break;
      case 4:
        filteredByPriceProperties = allProperties.filter(
          (property) => property.price < 800000
        );
        break;
      case 5:
        filteredByPriceProperties = allProperties.filter(
          (property) => property.price < 1000000
        );
        break;
      default:
        filteredByPriceProperties = allProperties;
    }
    setFilterProperties(filteredByPriceProperties);

    return filterProperties;
  };

  return (
    <>
      <FilterContainer>
        <button onClick={deployPriceOptions}>
          <span>Filter by price</span>
          <img src="/images/icons8-doble-abajo-30.png" alt="" />
        </button>
        <div
          className={
            dropdownPriceOptionsStatus
              ? "filter-options-container"
              : "filter-options-container--hidden"
          }
        >
          <button onClick={() => filterByPrice(0)} className="filter-options">
            Show All
          </button>
          <button onClick={() => filterByPrice(1)} className="filter-options">
            Under 200.000€
          </button>
          <button onClick={() => filterByPrice(2)} className="filter-options">
            Under 400.000€
          </button>
          <button onClick={() => filterByPrice(3)} className="filter-options">
            Under 600.000€
          </button>
          <button onClick={() => filterByPrice(4)} className="filter-options">
            Under 800.000€
          </button>
          <button onClick={() => filterByPrice(5)} className="filter-options">
            Under 1.000.000€
          </button>
        </div>
      </FilterContainer>
      <PropertiesList allProperties={filterProperties} />
    </>
  );
};

export default Filter;
