import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,



  Nav,
  Navbar,
  NavbarBrand,

  NavbarToggler,
  NavItem,
  NavLink
} from 'reactstrap';

interface IAppNavbarProps {
  isAuthorized?: boolean;
}

export const AppNavbar: React.FC<IAppNavbarProps> = ({ isAuthorized }) => {

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Todo List</NavbarBrand>
      <NavbarToggler />
      <Collapse navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <Link to="/">Tâches</Link>
          </NavItem>
          {
            isAuthorized && (
              <NavItem>
                <NavLink href="#">Déconnexion</NavLink>
              </NavItem>
            )
          }

        </Nav>
      </Collapse>
    </Navbar>
  );
};
