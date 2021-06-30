import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import * as productActions from "../../redux/actions/productActions";
import { Table, Button } from "reactstrap";
import alertify from "alertifyjs"
import { Link } from "react-router-dom";
import { ContactSupportOutlined, DragHandleRounded, ThreeSixty } from "@material-ui/icons";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";

class CartDetail extends Component {

  constructor() {
    super();
    this.state = {count: 0};
  }

  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " sepetten silindi")
  }
  addToProductDetail = (product) => {
    this.props.actions.addToProductDetail({quantity: 1, product });
  };
  sumPriceTt(product) {   
    this.setState({count: this.state.count + product.quantity * product.product.unitPrice});
    // this.state.count;
    {console.log(this.state)};
    // this.props.actions.sumPrice({sum: 9, product});
    // console.log(product.quantity);
    // this.state.attribute = this.state.attribute + product.quantity;
    // console.log(this.state.attribute)
  };

  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>Ürün Görseli</th>
              <th>Ürün Adı</th>
              <th>Fiyatı</th>
              <th>Adet</th>
              <th />
            </tr>
          </thead>
          <tbody >
        
            {this.props.cart.map(cartItem => (
              <tr key={cartItem.product.id}>
                <th onLoad={() => this.sumPriceTt(cartItem)} scope="row">
                  <Link to="/productDetail" onClick={() => this.addToProductDetail(cartItem.product)}>
                <img width="50px" src={require("../../../../img/" + cartItem.product.url)}></img>
                </Link></th>
                <td><Link to="/productDetail" onClick={() => this.addToProductDetail(cartItem.product)}>{cartItem.product.productName}</Link></td>
                <td>{cartItem.product.unitPrice * cartItem.quantity}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => this.removeFromCart(cartItem.product)}
                  >
                    sil
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      <Row>
        <Col sm="3">
       TOPLAM FİYAT = {this.state.count}
               
              
        </Col>
        <Col sm="7">
        </Col>
        <Col sm="2">
        <Link to="/payment"><Button
                    color="success"
                    
                  >
                    Alışverişi Tamamla
                  </Button></Link>
        </Col>
      </Row>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
      sumPrice: bindActionCreators(cartActions.sumPrice, dispatch),
      addToProductDetail: bindActionCreators(productActions.addToProductDetail, dispatch)
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
)(CartDetail);
