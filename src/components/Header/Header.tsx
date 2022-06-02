import { NavLink } from "react-router-dom";
import HeaderContainer from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderContainer>
      <header>
        <nav>
          <ul>
            <li className="company-logo">
              <img src="images/icons8-cebada-100.png" alt="cebada" />
              <NavLink to="/home">
                <h1>Rustik</h1>
              </NavLink>
            </li>
            <li>
              <NavLink to="/allproperties">Properties</NavLink>
            </li>
            <li>
              <NavLink to="/login">
                <button>Login</button>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </HeaderContainer>
  );
};

export default Header;
