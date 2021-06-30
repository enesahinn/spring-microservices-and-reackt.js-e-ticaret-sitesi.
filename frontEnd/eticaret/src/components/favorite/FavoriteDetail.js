import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as favoriteActions from "../../redux/actions/favoriteActions";
import { Table, Button } from "reactstrap";
import alertify from "alertifyjs"
import * as productActions from "../../redux/actions/productActions";
import { Link } from "react-router-dom";

class FavoriteDetail extends Component {
  removeFromFavorite(product) {
    this.props.actions.removeFromFavorite(product);
    alertify.error(product.productName + " favorilerden kaldırıldı.")
  }
  addToProductDetail = (product) => {
    this.props.actions.addToProductDetail({quantity: 1, product });
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
              <th></th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.favorite.map(favoriteItem => (
              <tr key={favoriteItem.product.id}>
                <th scope="row">
                <Link to="/productDetail" onClick={() => this.addToProductDetail(favoriteItem.product)}>
                  <img width="50px" src={require("../../../../img/" + favoriteItem.product.url)}></img>
                  </Link></th>
                <td><Link to="/productDetail" onClick={() => this.addToProductDetail(favoriteItem.product)}>
                  {favoriteItem.product.productName}</Link></td>
                <td>{favoriteItem.product.unitPrice}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => this.removeFromFavorite(favoriteItem.product)}
                  >
                    sil
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromFavorite: bindActionCreators(favoriteActions.removeFromFavorite, dispatch),
      addToProductDetail: bindActionCreators(productActions.addToProductDetail, dispatch)
    }
  };
}
function mapStateToProps(state) {
  return {
    favorite: state.favoriteReducer
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteDetail);