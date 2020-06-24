import React from "react";
import AllProducts from "./AllProducts";
import { fetchAllProducts } from "../../redux/actions/singleProduct";

import { connect } from "react-redux";

class AllProductsContainer extends React.Component {
    constructor(props){  
    super(props);
    }

  componentDidMount() {
      this.props.fetchAllProducts();
  }   
    render() {
    return (
      <div>
        <AllProducts 
        product= {this.props.product}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    console.log(state.productsReducers)
  return {
      product: state.productsReducers.allProducts
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: () => dispatch(fetchAllProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllProductsContainer);
