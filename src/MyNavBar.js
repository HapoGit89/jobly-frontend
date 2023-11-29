import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import "./MyNavBar.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function MyNavBar() {

  // added NavLink for Drinks Route and for Add Snacks/Drinks Route
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="NavbarBrand">
          Jobly
        </NavLink>

        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/companies">Companies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/jobs">Jobs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/user">Profile</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default MyNavBar;