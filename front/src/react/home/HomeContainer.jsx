import React from "react";
import Home from "./Home";

import { connect } from "react-redux";

class HomeContainer extends React.Component {
  
  render() {
    return (
      <Home/>
    );
  }
}

export default connect(
  null,
  null
)(HomeContainer);