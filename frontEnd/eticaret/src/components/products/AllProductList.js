import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as favoriteActions from "../../redux/actions/favoriteActions";
import alertify from "alertifyjs";
import {
  Card,
  CardImg,
  CardTitle,
  CardColumns,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import * as cartActions from "../../redux/actions/cartActions";

class ProductList extends React.Component {
  componentDidMount() {
    this.props.actions.getAllProducts();
  }
  addToFavorite = (product) => {
    this.props.actions.addToFavorite({ quantity: 1, product });
    alertify.success(product.productName + " fovilere eklendi");
  };
  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product });
    alertify.success(product.productName + " sepete eklendi");
  };
  addToProductDetail = (product) => {
    this.props.actions.addToProductDetail({quantity: 1, product });
  };


  const;

  render() {
    return (
      <CardColumns>
        {this.props.products.map((product) => (
          <Card>
            <CardBody width="150px">
              <CardTitle tag="h5">
                <Row>
                  <Col sm="10">{product.productName}</Col>
                  {/* <Col sm="7"></Col> */}
                  <Col sm="2">
                    <Link onClick={() => this.addToFavorite(product)}>
                      <Icon size="large" color="red" name="like"></Icon>
                    </Link>{" "}
                  </Col>{" "}
                </Row>
              </CardTitle>
              
              <Link to="/productDetail" onClick={() => this.addToProductDetail(product)}>
                <CardImg
                  top
                  width="100%"
                  src={require("../../../../img/" + product.url)}
                  alt="Card image cap"
                />
              </Link>
              <CardTitle tag="h5">
              <Row> 
                  <Col sm="5">{product.unitPrice + "  TL"}</Col>
                  <Col sm="5"></Col>
                  <Col sm="2">
                      <Link onClick={() => this.addToCart(product)}><Icon size="large" color="blue" name="in cart"></Icon></Link>
                  </Col>
              </Row>  </CardTitle></CardBody>
          
          </Card>
        ))}
      </CardColumns>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getAllProducts: bindActionCreators(productActions.getAllProducts, dispatch),
      addToFavorite: bindActionCreators(favoriteActions.addToFavorite, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch),
      addToProductDetail: bindActionCreators(productActions.addToProductDetail, dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
