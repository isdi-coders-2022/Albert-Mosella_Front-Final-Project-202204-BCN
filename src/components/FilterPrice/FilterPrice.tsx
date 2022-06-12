import { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { IProperty } from "../../types/types";
import FilterButton from "../FilterButton/FilterButton";
import PropertiesList from "../PropertiesList/PropertiesList";
import FilterPriceContainer from "./FilterPriceStyles";

const FilterPrice = () => {
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
      <FilterPriceContainer>
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
          <FilterButton text="Show All" action={() => filterOption(0)} />
          <FilterButton
            text="Under 200.000€"
            action={() => filterOption(200000)}
          />
          <FilterButton
            text="Under 400.000€"
            action={() => filterOption(400000)}
          />
          <FilterButton
            text="Under 600.000€"
            action={() => filterOption(600000)}
          />
          <FilterButton
            text="Under 800.000€"
            action={() => filterOption(800000)}
          />
          <FilterButton
            text="Under 1.000.000€"
            action={() => filterOption(1000000)}
          />
        </div>
      </FilterPriceContainer>
      <PropertiesList allProperties={filterProperties} />
    </>
  );
};

export default FilterPrice;
