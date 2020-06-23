import React from "react";
import SingleProduct from "./SingleProduct";
import { fetchProduct } from "../../redux/actions/singleProduct";

import { connect } from "react-redux";

class SingleProductContainer extends React.Component {
  render() {
    return (
      <div>
        <SingleProduct />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(fetchProduct(id)),
  };
};

export default connect(null, mapDispatchToProps)(SingleProductContainer);
