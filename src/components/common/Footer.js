import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Footer = () => {
  const date = new Date();
  const copyrightYear = date.getFullYear();
  return (
    <div className="row">
    <Navbar inverse collapseOnSelect fluid={true} className="cogn-internal-footer">
        <Navbar.Brand className="cogn-internal-navbar-brand">
          &copy; { copyrightYear } Cognitiv
        </Navbar.Brand>
        <Nav pullRight>
        <LinkContainer to="/privacy-policy">
        <NavItem eventKey={1}>
          Privacy Policy
        </NavItem>
        </LinkContainer>
        <LinkContainer to="/service-terms">
          <NavItem eventKey={1}>
            Terms of Service
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/cookie-policy">
          <NavItem eventKey={1}>
            Cookies Policy
          </NavItem>
        </LinkContainer>
        </Nav>
    </Navbar>
  </div>
  )
};
export default Footer ;
