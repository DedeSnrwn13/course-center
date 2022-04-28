import React, {Suspense} from 'react';
import { 
  Routes, Route, NavLink
} from "react-router-dom";
import {
  Navbar, NavbarBrand, Collapse, 
  Nav, NavItem, NavbarToggler 
} from 'reactstrap';
const Login = React.lazy(() => import("./components/Login"));
const Register = React.lazy(() => import("./components/Register"));

const Home = () => {
    return (
    	<div>
        	<Navbar
	        color="dark"
	        container="md"
	        dark
	        expand="md"
	        fixed="top"
	      >
	        <NavbarBrand href="/">
	          reactstrap
	        </NavbarBrand>
	        <NavbarToggler onClick={function noRefCheck(){}} />
	        <Collapse navbar>
	          <Nav
	            className="me-auto"
	            navbar
	          >
	            <NavItem>
	              <NavLink to="/login">
	                Login
	              </NavLink>
	            </NavItem>
	            <NavItem>
	              <NavLink to="/register">
	                Register
	              </NavLink>
	            </NavItem>
	          </Nav>
	        </Collapse>
	      </Navbar>
	    
	    	<Suspense fallback={<div>Loading...</div>}>
			    <Routes>
			        <Route exact path="/login" element={<Login/>} />
			        <Route exact path="/register" element={<Register/>} />
			    </Routes>
			</Suspense>
	   </div>
    );
};

export default Home;
