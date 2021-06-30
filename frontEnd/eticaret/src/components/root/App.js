import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import { Route, Switch } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import NotFound from "../common/NotFound";
import ProductList from "../products/ProductList";
import FavoriteDetail from "../favorite/FavoriteDetail";
import CategoryList from "../categories/CategoryList";
import LoginFrom from "../login/LoginForm";
import ProductDetail from "../products/ProductDetail";
import { Sticky } from 'semantic-ui-react';
import AllProductList from "../products/AllProductList";
import PaymentForm from "../login/PaymentForm"


function App() {
  return (
    <Container>
      <Sticky>
       
      <Navi /> 
      <CategoryList />
      </Sticky>
      
      <table><tr><td height="10px"></td></tr></table>
      <Switch>
        <Route path="/" exact component={AllProductList} />
        <Route path="/product"  component={ProductList} />
        <Route path="/cart"  component={CartDetail} />
        <Route path="/favorite"  component={FavoriteDetail} />
        <Route path="/login" component={LoginFrom} />
        <Route path="/productDetail" component={ProductDetail} />
        <Route path="/payment" component={PaymentForm} />
        <Route component={NotFound} />
      </Switch>
    
    </Container>
  );
}

export default App;
