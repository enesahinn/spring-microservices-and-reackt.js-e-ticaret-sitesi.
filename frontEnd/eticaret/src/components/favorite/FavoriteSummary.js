import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import {
  NavItem,
  NavLink
} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as favoriteActions from "../../redux/actions/favoriteActions";
import {Link} from "react-router-dom"
import alertify from "alertifyjs"

class FavoriteSummary extends Component {
  removeFromFavorite(product) {
    this.props.actions.removeFromFavorite(product);
    alertify.error(product.productName + " favorilerden kaldırıldı.")
  }
  renderEmpty() {
    return (
      <NavItem>
                <NavLink>
                  <table>
                    <tr>
                      <td align="center">   
                          <Icon size="big" name="like"></Icon>                     
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Favorilerim
                      </td>
                    </tr>
                  </table>
                </NavLink>
              </NavItem>
    );
  }
  renderSummary() {
    return (
        <NavItem>
                <NavLink>
                  <table>
                    <tr>
                      <td align="center">
                        <Link to="/favorite">
                          <Icon size="big" color="red" name="like"></Icon>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Link to="/favorite"><h6 style={{color:'red'}}>Favorilerim</h6></Link>
                      </td>
                    </tr>
                  </table>
                </NavLink>
              </NavItem>
    );
  }
  render() {
    return (
      <div>
        {this.props.favorite.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromFavorite: bindActionCreators(favoriteActions.removeFromFavorite, dispatch)
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
)(FavoriteSummary);
