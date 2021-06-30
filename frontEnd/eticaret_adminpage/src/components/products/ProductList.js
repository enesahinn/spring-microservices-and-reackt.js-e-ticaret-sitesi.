

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import {deleteProduct} from "../../redux/actions/productActions";

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


class ProductList extends React.Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  const;

  render() {
    return (
      <CardColumns>
        {this.props.products.map((product) => (
          <Card>
            <CardBody width="150px">
              <CardTitle tag="h5">
                <Row>
                  <Col sm="9">{product.productName}</Col>
                  
                  <Col sm="3">
                  <table align="right">{product.unitPrice + "  TL"}</table>
                  </Col>{" "}
                </Row>
              </CardTitle>
              
              <Link to={"/"}>
                <CardImg
                  top
                  width="100%"
                  src={require("../../../../img/" + product.url)}
                 
                  alt="Card image cap"
                /> 
              </Link>
              <CardTitle tag="h5">
              <Row> 
                  <Col><table align="center">
                    <tr>
                      <td align="center">
                      <Link to={"/saveproduct/"+product.id}><Icon size="large" color="blue" name="settings"></Icon></Link>
                      
                      </td>
                    </tr>
                    <tr>
                      <td align="center">
                        <Link to={"/saveproduct/"+product.id}><h6  color="green">Güncelle</h6></Link>
                      </td>
                    </tr>
                  </table></Col>
                  <Col><table align="center">
                    <tr>
                      <td align="center">
                      <Link onClick={() => deleteProduct(product)}><Icon size="big" color="red" name="delete"></Icon></Link>
                      
                      </td>
                    </tr>
                    <tr>
                      <td align="center">
                      <Link to={"/deleteproduct/"+product.id}><h6  color="red">Sil</h6></Link>
                      </td>
                    </tr>
                  </table></Col>
              
              </Row>  </CardTitle></CardBody>
          
          </Card>
        ))}
      </CardColumns>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
   
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      deleteProduct: bindActionCreators(productActions.deleteProduct, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

