import React from "react";
import Home from "./Home";
import { fetchAllProducts } from "../../redux/actions/products";

import { connect } from "react-redux";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    
  }

  


  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {
    return <Home juegos={this.props.juegos} />;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    juegos: state.productsReducers.allProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: () => dispatch(fetchAllProducts()),
    
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
