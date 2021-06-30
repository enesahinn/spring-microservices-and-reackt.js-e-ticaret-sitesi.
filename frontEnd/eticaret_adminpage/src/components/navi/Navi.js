import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../../img/logo.png";
import { Icon } from "semantic-ui-react";


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
                <NavLink>
                  <table>
                    <tr>
                      <td align="center">
                      </td>
                    </tr>
                  </table>
                </NavLink>
              </NavItem>
              <NavItem>
              <NavLink>
                  <table>
                    <tr>
                      <td align="center">
                      <Link to="/saveproduct"><Icon size="big" color="green" name="plus square outline"></Icon></Link>
                      </td>
                    </tr>
                    <tr>
                      <td align="center">
                        <Link to="/saveproduct"><h6  color="green">Ürün ekle</h6></Link>
                      </td>
                    </tr>
                  </table>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
