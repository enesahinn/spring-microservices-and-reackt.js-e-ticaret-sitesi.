import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";
import { Icon, Input } from "semantic-ui-react";
import FavoriteSummary from "../favorite/FavoriteSummary";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar color="white" light expand="md">
          <NavbarBrand>
            <Link to="/">
              <img src={logo} height="35px" alt="Logo" to="/" />
            </Link>
            
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>   
                <table><tr><td>&nbsp;&nbsp;</td></tr>                 
                        <tr><td><Input align="center" icon='search' placeholder='Aradığınız ürünü yazınız ...' /></td></tr></table>            
            </NavItem>
            <NavItem>                    
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </NavItem>
              <NavItem>
                <NavLink>
                  <table>
                    <tr>
                      <td align="center">
                        <Link to="/login">
                          <Icon color="blue" size="big" name="user"></Icon>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Link to="/login">
                          <h6 color="blue">Giriş Yap</h6>
                        </Link>
                      </td>
                    </tr>
                  </table>
                </NavLink>
              </NavItem>
              
                {/* <NavLink>
                  <Link to="/saveproduct">Ürün ekle</Link>
                </NavLink> */}
                <FavoriteSummary />
                <CartSummary /> 
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
