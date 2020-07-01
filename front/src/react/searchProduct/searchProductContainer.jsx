import React from "react";
import { connect } from "react-redux";
import AllProducts from "../allProducts/AllProducts";

class SearchProductContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <AllProducts product={(this.props.product).toUpperCase()} />;
  }
}

const mapStateToProps = (state) => {
  return { product: state.productsReducers.allProducts };
};

export default connect(mapStateToProps, null)(SearchProductContainer);
