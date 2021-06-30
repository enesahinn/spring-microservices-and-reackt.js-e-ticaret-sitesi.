import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import { Route, Switch } from "react-router-dom";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";
import ProductList from "../products/ProductList";
import CategoryList from "../categories/CategoryList";

function App() {
  return (
    <Container>
      <Navi />
      <CategoryList />
      <table><tr><td height="25px"></td></tr></table>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/product"  component={ProductList} />
        <Route path="/saveproduct/:productId" component={AddOrUpdateProduct} />
        <Route path="/saveproduct" component={AddOrUpdateProduct} />
        <Route component={NotFound} />
      </Switch>
    
    </Container>
  );
}

export default App;
