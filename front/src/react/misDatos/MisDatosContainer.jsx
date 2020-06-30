import React from "react";
import MisDatos from "./MisDatos";
import { connect } from "react-redux";

class MisDatosContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <MisDatos isLogged={this.props.isLogged}></MisDatos>;
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.logUserReducer.isLogged,
  };
};

export default connect(mapStateToProps, null)(MisDatosContainer);
