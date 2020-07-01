import React from "react";
import { connect } from "react-redux";
import CrearProductos from './CrearProductos'
import { withRouter} from "react-router"

class CrearProductosContainer extends React.Component {

  render() {
    return (
    <CrearProductos/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.logUserReducer.isLogged
  };
}; 
export default withRouter(connect(mapStateToProps, null)(CrearProductosContainer));
