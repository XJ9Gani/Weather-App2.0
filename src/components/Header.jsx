import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCallback } from "react";
export default function Header() {
  const activeLink = useCallback(
    ({ isActive }) =>
      isActive
        ? "text-success   nav-link fs-2 m-3 fw-normal"
        : "text-light nav-link fs-2 m-3",
    []
  );
  return (
    <header
      style={{
        width: "100%",
        height: "20vh",
        position: "sticky",
        top: 0,
        left: 0,
        backgroundColor: "#1a1a1a",
        display: "flex",
        justifyContent: "center",
        zIndex: 1,
      }}
    >
      <Navbar>
        <NavLink to="/" className={activeLink}>
          Main
        </NavLink>
        <NavLink to="/about" className={activeLink}>
          О приложении
        </NavLink>
      </Navbar>
    </header>
  );
}
