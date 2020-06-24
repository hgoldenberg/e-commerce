import React from "react";
import Carrito from "./Carrito";

import { connect } from "react-redux";

class CarritoContainer extends React.Component {
  
  render() {
    return (
      <Carrito/>
    );
  }
}

export default connect(
  null,
  null
)(CarritoContainer);