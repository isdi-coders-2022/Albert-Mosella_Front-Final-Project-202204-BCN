import { useState } from "react";
import { NavLink } from "react-router-dom";
/* import { useAppDispatch } from "../../redux/hooks"; */
import PropertyFormStyle from "./PropertyFormStyles";

const PropertyForm = (): JSX.Element => {
  /* const dispatch = useAppDispatch(); */

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
  };

  const [formValues, setFormValues] = useState(initialFormValue);

  const handleInputChange = (event: {
    target: { id: string; value: string };
  }) => {
    setFormValues({ ...formValues, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    /* dispatch(createPropertyThunk(formValues)); */
    setFormValues(initialFormValue);
  };
  return (
    <>
      <PropertyFormStyle>
        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="typeOf">Type of</label>
          <input
            type="text"
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
            id="name"
            value={formValues.name}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <label htmlFor="surface">Surface</label>
          <input
            type="number"
            id="surface"
            value={formValues.surface}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={formValues.price}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <label htmlFor="bedrooms">Bedrooms</label>
          <input
            type="number"
            id="bedrooms"
            value={formValues.bedrooms}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <label htmlFor="bathrooms">Bathrooms</label>
          <input
            type="number"
            id="bathrooms"
            value={formValues.bathrooms}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <label htmlFor="year">Year</label>
          <input
            type="number"
            id="year"
            value={formValues.year}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            value={formValues.description}
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
          <label htmlFor="views">Views</label>
          <input
            type="checkbox"
            id="views"
            onChange={handleInputChange}
            autoComplete="off"
          />
          <button
            className="form-button"
            type="submit"
            disabled={
              formValues.typeOf === "" ||
              formValues.adress === "" ||
              formValues.name === ""
            }
          >
            Register
          </button>
          <NavLink to="/login">Go back to Login</NavLink>
        </form>
      </PropertyFormStyle>
    </>
  );
};

export default PropertyForm;
