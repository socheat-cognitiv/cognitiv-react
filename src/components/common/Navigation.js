import React, {Component} from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { logoutUser } from "../../actions";
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cognitivLogo from '../../resources/images/cogn-logo-internal.png';

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: user => dispatch(logoutUser(user))
  };
};

const mapStateToProps = (state) => {
  return { 
    user: state.user 
  };
};

class ConnectedNavigation extends Component {
  handleLogout = this.handleLogout.bind(this);
  handleLogout() {
      let response = { ...this.props.user,
        public_key: false,
        private_key:  false,
        auth_token: false,
        user_id: false,
        user_type: false,
        expiration_date: false
    }
    this.props.logoutUser(response);
  }
  render() {
    return(
      <div className="row">
        <Navbar className="cogn-internal-nav" inverse collapseOnSelect fluid={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link className="cogn-internal-brand" to="/"><img src={cognitivLogo} alt="Cognitiv Logo" height={28}/></Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="/advertisers/overview">
                <NavItem>
                  Advertisers
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/campaigns/overview">
                <NavItem>
                  Campaigns
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/partners/overview">
                <NavItem>
                  Partners
                </NavItem>
              </LinkContainer>
              <NavDropdown eventKey={3} title="Reports" id="cogn-internal-nav-dropdown">
                <LinkContainer to="/campaigns/beacon-report">
                <MenuItem eventKey={3.1}>Beacon Report</MenuItem>
                </LinkContainer>
                <LinkContainer to="/campaigns/revenue-report">
                <MenuItem eventKey={3.2}>Revenue Report</MenuItem>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <Nav className="cogn-internal-nav-right" pullRight>
              <LinkContainer to="/settings">
                <NavItem>
                  <FontAwesomeIcon icon="cog" /><span className="cogn-font-icon-left">Settings</span>
                </NavItem>
              </LinkContainer>
              <NavItem className="cogn-right-nav-item" onClick={this.handleLogout}>
              <FontAwesomeIcon icon="sign-out-alt" /><span className="cogn-font-icon-left">Logout</span>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }};

const Navigation = connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(ConnectedNavigation);
export default Navigation;
