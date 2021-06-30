import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge
} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import {Link} from "react-router-dom"
import alertify from "alertifyjs"

class CartSummary extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " sepetten silindi")
  }
  renderEmpty() {
    return (
      <NavItem>
                <NavLink>
                  <table>
                    <tr>
                      <td align="center">
                        
                          <Icon size="big" name="in cart"></Icon>
                        
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Sepetim
                      </td>
                    </tr>
                  </table>
                </NavLink>
              </NavItem>
    );
  }
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <NavItem>
                <NavLink>
                  <table>
                    <tr>
                      <td align="center">
                        <Link to="/cart">
                          <Icon size="big" color="green" name="in cart"></Icon>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Link to="/cart"><h6 style={{color:'green'}}>Sepetim</h6></Link>
                      </td>
                    </tr>
                  </table>
                </NavLink>
              </NavItem>
        <DropdownMenu right>
          {this.props.cart.map(cartItem => (
            <DropdownItem key={cartItem.product.id}>
              <Badge color="danger" onClick={()=>this.removeFromCart(cartItem.product)}>-</Badge>
              {cartItem.product.productName}
              <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem><Link to={"/cart"}>Sepete git</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
    }
  };
}
function mapStateToProps(state) {
  return {
    cart: state.cartReducer
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartSummary);
