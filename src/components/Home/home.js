import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon,
MDBDropdown, MDBDropdownToggle,MDBBtn, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import './home.css'

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <div>
    <Router>
      <MDBNavbar className='navbar' color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Eureka</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/">About US</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/">ContactUs</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                 
                  Login As
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-left">
                    
                  <MDBDropdownItem href="/dashboard">User</MDBDropdownItem>
                  <MDBDropdownItem href="/dashboard">Admin</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>

    <MDBBtn href="/dashboard" style={{
        marginLeft:"-200px",
        marginTop:"100px"
    }} color="blue-grey">Join us</MDBBtn>
    </div>
    );
  }
}

export default NavbarPage;