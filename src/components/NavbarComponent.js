import React from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavbarToggler,
} from "reactstrap";
import Login from "./Login";
import Register from "./Register";
import App from "./../App";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar color="dark" container="md" dark expand="md" fixed="top">
        <NavbarBrand>
          <Link to="/home">reactstrap</Link>
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink to="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/register">Register</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default NavbarComponent;
