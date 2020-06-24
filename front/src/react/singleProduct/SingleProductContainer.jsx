import React from "react";
import SingleProduct from "./SingleProduct";
import { fetchProduct } from "../../redux/actions/products";

import { connect } from "react-redux";

class SingleProductContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchProduct(this.props.id);
  }
  render() {
    return <SingleProduct product={this.props.product} />;
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.match.params.id);
  return {
    product: state.productsReducers.one,
    id: ownProps.match.params.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(fetchProduct(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductContainer);
