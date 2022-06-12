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

  const priceFilter = (option: number): IProperty[] => {
    const filterResult = allProperties.filter(
      (property) => property.price < option
    );
    return filterResult;
  };

  const filterOption = (option: number) => {
    deployPriceOptions();
    let filteredByPriceProperties = [];
    switch (option) {
      case 0:
        filteredByPriceProperties = allProperties;
        break;
      case 200000:
        filteredByPriceProperties = priceFilter(option);
        break;
      case 400000:
        filteredByPriceProperties = priceFilter(option);
        break;
      case 600000:
        filteredByPriceProperties = priceFilter(option);
        break;
      case 800000:
        filteredByPriceProperties = priceFilter(option);
        break;
      case 1000000:
        filteredByPriceProperties = priceFilter(option);
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
          <button onClick={() => filterOption(0)} className="filter-options">
            Show All
          </button>
          <button
            onClick={() => filterOption(200000)}
            className="filter-options"
          >
            Under 200.000€
          </button>
          <button
            onClick={() => filterOption(400000)}
            className="filter-options"
          >
            Under 400.000€
          </button>
          <button
            onClick={() => filterOption(600000)}
            className="filter-options"
          >
            Under 600.000€
          </button>
          <button
            onClick={() => filterOption(800000)}
            className="filter-options"
          >
            Under 800.000€
          </button>
          <button
            onClick={() => filterOption(1000000)}
            className="filter-options"
          >
            Under 1.000.000€
          </button>
        </div>
      </FilterContainer>
      <PropertiesList allProperties={filterProperties} />
    </>
  );
};

export default Filter;
