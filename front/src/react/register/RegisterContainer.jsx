import React from "react";
import Register from "./Register";

import { connect } from "react-redux";

class RegisterContainer extends React.Component {
  
  render() {
    return (
      <Register/>
    );
  }
}

export default connect(
  null,
  null
)(RegisterContainer);