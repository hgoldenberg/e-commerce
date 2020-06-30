import React from "react";
import { connect } from "react-redux";
import Checkout from './Checkout';
import { withRouter} from "react-router"

class CheckoutContainer extends React.Component {

  render() {
    return (
      <Checkout/>
    );
  }
}

export default withRouter(connect(null, null)(CheckoutContainer));
