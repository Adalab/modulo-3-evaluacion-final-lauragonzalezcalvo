import { NavLink } from "react-router-dom";
import "../styles/components/Header.scss";
import logo from "../images/rickandmortyLogo.png";
const Header = () => {
  return (
    <header className="header">
      <NavLink to="/">
        <img className="header__image" src={logo} alt="logo de Rick y Morty" />
      </NavLink>
    </header>
  );
};
export default Header;
