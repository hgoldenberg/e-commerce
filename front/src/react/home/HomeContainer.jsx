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
    return <Home juegos={this.props.juegos} isLogged={this.props.isLogged}/>;
  }
}

const mapStateToProps = (state) => {
  console.log("ESTADO ES " +state);
  return {
    juegos: state.productsReducers.allProducts,
    isLogged: state.logUserReducer.isLogged
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: () => dispatch(fetchAllProducts()),
    
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
