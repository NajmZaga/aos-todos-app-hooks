import React from 'react';
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

}

export const AppNavbar: React.FC<IAppNavbarProps> = () => {

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Todo List</NavbarBrand>
      <NavbarToggler />
      <Collapse navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/components/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/reactstrap/reactstrap">Tâches</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Déconnexion</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
