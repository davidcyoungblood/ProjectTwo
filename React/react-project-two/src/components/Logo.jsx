import NavLink from "react-bootstrap/esm/NavLink";
export const Logo = () => {
  return (
    <NavLink href="Home">
      <img
        src="icon.png"
        alt=""
        style={{
        position: "absolute",
          left: 10,
          top: 10,
          height: "5vh",
          display: "flex"
        }}
      />
    </NavLink>
  );
};
