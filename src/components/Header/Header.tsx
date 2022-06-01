import { NavLink } from "react-router-dom";
import HeaderContainer from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderContainer>
      <header>
        <div className="company-logo">
          <img src="images/icons8-cebada-100.png" alt="cebada" />
          <h1>Rustik</h1>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allproperties">All properties</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </HeaderContainer>
  );
};

export default Header;
