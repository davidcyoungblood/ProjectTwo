import NavLink from "react-bootstrap/esm/NavLink";
import { Link } from "react-router-dom";
export const Logo = () => {
  return (
    <NavLink as={Link} to="/">
      <img
        src="icon.png"
        alt=""
        className="logo"
      />
    </NavLink>
  );
};
