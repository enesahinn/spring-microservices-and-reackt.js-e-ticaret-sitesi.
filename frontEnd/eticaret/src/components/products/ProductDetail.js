import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as favoriteActions from "../../redux/actions/favoriteActions";
import * as cartActions from "../../redux/actions/cartActions";
import { Table,  Button } from "reactstrap";
import alertify from "alertifyjs"
import { DragHandleRounded, ThreeSixty } from "@material-ui/icons";
import { Link } from "@material-ui/core";
import { Icon } from "semantic-ui-react";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";

class ProductDetail extends Component {
  addToFavorite = (product) => {
    this.props.actions.addToFavorite({ quantity: 1, product });
    alertify.success(product.productName + " fovilere eklendi");
  };
  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: Number(1), product });
    alertify.success(product.productName + " sepete eklendi");
  };
  render() {
    return (
      <div>{this.props.productDetail.map(productItem => (
        <Table border="0">
          <thead>
            <tr align="center">
              <th colSpan="2">{productItem.product.productName}</th>
            </tr>
          </thead>
          <tbody >
            
              <tr key={productItem.product.id}>
                <th width="500">
                  <img width="450" src={require("../../../../img/" + productItem.product.url)} />
                </th>
                <th><br /><br /><br /><br /><br /><br /><h1>{productItem.product.productType}&nbsp;&nbsp;&nbsp;&nbsp; {productItem.product.unitPrice}</h1><br /><br />
                {productItem.product.productExplanation}<br /><br /><br /><br />
                <Row>
                  <Col sm="8"></Col>
                  <Col sm="4">
                    <Link onClick={() => this.addToFavorite(productItem.product)}>
                  <Icon size="big" color="red" name="like"></Icon>
                </Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link onClick={() => this.addToCart(productItem.product)}>
                  <Icon size="big" color="blue" name="in cart"></Icon>
                </Link></Col>
   
                </Row>
                
                </th>
                
                {/* <td>
                  <Button
                    color="danger"
                    onClick={() => this.removeFromCart(cartItem.product)}
                  >
                    sil
                  </Button>
                </td> */}
              </tr>
            
          </tbody>
        </Table>))}
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: {
//       removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
//     }
//   };
// }
function mapStateToProps(state) {
  return {
    productDetail: state.productDetailReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToFavorite: bindActionCreators(favoriteActions.addToFavorite, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
      addToProductDetail: bindActionCreators(productActions.addToProductDetail, dispatch)
    },
  };
}

export default connect(
  mapStateToProps,
   mapDispatchToProps
)(ProductDetail);
