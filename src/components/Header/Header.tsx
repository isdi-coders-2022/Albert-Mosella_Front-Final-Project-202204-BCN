import { NavLink, useNavigate } from "react-router-dom";
import { logOutActionCreator } from "../../redux/features/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import HeaderContainer from "./HeaderStyles";

const Header = () => {
  const token = localStorage.getItem("token");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = (): void => {
    localStorage.removeItem("token");
    dispatch(logOutActionCreator());
    navigate("/home");
  };

  return (
    <HeaderContainer>
      <header>
        <nav>
          <ul>
            <li className="company-logo">
              <img src="/images/icons8-cebada-100.png" alt="cebada" />
              <NavLink to="/home">
                <h1>Rustik</h1>
              </NavLink>
            </li>
            <li>
              <NavLink to="/all-properties">Properties</NavLink>
            </li>
            <li>
              {token ? (
                <button onClick={handleLogout}>Logout</button>
              ) : (
                <NavLink to="/login">
                  <button>Login</button>
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </HeaderContainer>
  );
};

export default Header;
