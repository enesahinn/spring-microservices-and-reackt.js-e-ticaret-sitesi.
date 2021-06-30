import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles'
import Table from 'reactstrap/lib/Table';

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minWidth: 500,
    margin: "3rem",    
    
  },
  media: {
    height: 140,
  },
}))

class CategoryList extends Component {



  renderEmpty = () =>{

  }

  componentDidMount() {
    this.props.actions.getCategories();
    this.props.actions.getTopCategories();
  }

  selectCategory = category => {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category.id)
  };

render(){
  return (
    <Table bgcolor="white">
    <Tabs>
    <TabList>
    {this.props.topCategory.map((category) => (
            <Tab key={category.id}>
              {category.categoryName}
            </Tab>
          ))}
    </TabList>
    <TabPanel>
      <Row>{this.props.categories.map((category) => (       
        <Col sm="3"> 
          {category.topCategoryId === 1 ? <Card body><Button
             active={category.id === this.props.currentCategory.id}
             onClick={() => this.selectCategory(category)}
             key={category.id}>{category.categoryName}</Button></Card> : this.renderEmpty()}           
        </Col>
    ))}</Row>
    </TabPanel>
    <TabPanel>
      <Row>{this.props.categories.map((category) => (       
        <Col sm="3"> 
          {category.topCategoryId === 2 ? <Card body> <Button
             active={category.id === this.props.currentCategory.id}
             onClick={() => this.selectCategory(category)}
             key={category.id}>{category.categoryName}</Button> </Card> : this.renderEmpty()}           
        </Col>
    ))}</Row>
    </TabPanel>
    <TabPanel>
      <Row>{this.props.categories.map((category) => (       
        <Col sm="3"> 
          {category.topCategoryId === 3 ? <Card body> <Button
             active={category.id === this.props.currentCategory.id}
             onClick={() => this.selectCategory(category)}
             key={category.id}>{category.categoryName}</Button> </Card> : this.renderEmpty()}           
        </Col>
    ))}</Row>
    </TabPanel>
    <TabPanel>
      <Row>{this.props.categories.map((category) => (       
        <Col sm="3"> 
          {category.topCategoryId === 4 ? <Card  body> <Button
             active={category.id === this.props.currentCategory.id}
             onClick={() => this.selectCategory(category)}
             key={category.id}>{category.categoryName}</Button> </Card> : this.renderEmpty()}           
        </Col>
    ))}</Row>
    </TabPanel>
    <TabPanel>
     
    </TabPanel>
  </Tabs></Table>

  );
}
}

function mapStateToProps(state) { 
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
    topCategory: state.topCategoryListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      getTopCategories: bindActionCreators(
        categoryActions.getTopCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(productActions.getProducts, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);
