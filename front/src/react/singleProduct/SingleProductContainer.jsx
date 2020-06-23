import React from "react";
import SingleProduct from "./SingleProduct";

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
  return {};
};

export default connect(null, null)(SingleProductContainer);
