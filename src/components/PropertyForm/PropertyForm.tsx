import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { blankStateActionCreator } from "../../redux/features/onePropertySlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  createPropertyThunk,
  editPorpertyThunk,
} from "../../redux/thunks/propertyThunks/propertyThunks";

import PropertyFormStyle from "./PropertyFormStyles";

const PropertyForm = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const initialFormValue = {
    typeOf: "",
    adress: "",
    name: "",
    surface: 0,
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    year: 0,
    description: "",
    image: "",
    views: false,
    airConditioning: false,
    heating: false,
    parking: false,
    pool: false,
    fireplace: false,
    garden: false,
    laundryRoom: false,
    storage: false,
    terrace: false,
    id: "",
  };

  const [formValues, setFormValues] = useState(initialFormValue);

  const { oneProperty } = useAppSelector((state) => state.oneProperty);

  useEffect(() => {
    if (oneProperty) {
      setFormValues(oneProperty);
    }
  }, [oneProperty]);

  const handleCheckboxChange = (event: {
    target: { id: string; checked: boolean };
  }) => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.checked,
    });
  };

  const handleInputChange = (event: {
    target: { id: string; value: string };
  }) => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    formValues.id
      ? dispatch(editPorpertyThunk(formValues.id, formValues))
      : dispatch(createPropertyThunk(formValues));
    dispatch(blankStateActionCreator());
    setFormValues(initialFormValue);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate("/allproperties");
  };

  return (
    <>
      <PropertyFormStyle>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="typeOf">Type of</label>
          <input
            type="text"
            maxLength={16}
            id="typeOf"
            value={formValues.typeOf}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <label htmlFor="adress">Adress</label>
          <input
            type="text"
            id="adress"
            value={formValues.adress}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            maxLength={16}
            id="name"
            value={formValues.name}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <label htmlFor="surface">Surface</label>
          <input
            type="number"
            maxLength={3}
            min="0"
            id="surface"
            value={formValues.surface}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            maxLength={8}
            min="0"
            id="price"
            value={formValues.price}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <label htmlFor="bedrooms">Bedrooms</label>
          <input
            type="number"
            maxLength={2}
            min="0"
            id="bedrooms"
            value={formValues.bedrooms}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <label htmlFor="bathrooms">Bathrooms</label>
          <input
            type="number"
            maxLength={2}
            min="0"
            id="bathrooms"
            value={formValues.bathrooms}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <label htmlFor="year">Year</label>
          <input
            type="number"
            maxLength={4}
            min="0"
            id="year"
            value={formValues.year}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            value={formValues.image}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            maxLength={260}
            value={formValues.description}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <div className="checkbox-container">
            <div className="checkbox-container-col">
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="views"
                  checked={formValues.views}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="views">Views</label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="airConditioning"
                  checked={formValues.airConditioning}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="airConditioning">Air Conditioning</label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="heating"
                  checked={formValues.heating}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="heating">Heating</label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="parking"
                  checked={formValues.parking}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="parking">Parking</label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="pool"
                  checked={formValues.pool}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="pool">Pool</label>
              </div>
            </div>
            <div className="checkbox-container-col">
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="fireplace"
                  checked={formValues.fireplace}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="fireplace">Fireplace</label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="garden"
                  checked={formValues.garden}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="garden">Garden</label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="laundryRoom"
                  checked={formValues.laundryRoom}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="laundryRoom">Laundry Room</label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="storage"
                  checked={formValues.storage}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="storage">Storage</label>
              </div>
              <div className="checkbox">
                <input
                  type="checkbox"
                  id="terrace"
                  checked={formValues.terrace}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="terrace">Terrace</label>
              </div>
            </div>
          </div>
          <button
            className="form-button"
            type="submit"
            disabled={
              formValues.typeOf === "" ||
              formValues.adress === "" ||
              formValues.name === ""
            }
          >
            Save
          </button>
          <NavLink to="/home">Go back to Home</NavLink>
        </form>
      </PropertyFormStyle>
    </>
  );
};

export default PropertyForm;
