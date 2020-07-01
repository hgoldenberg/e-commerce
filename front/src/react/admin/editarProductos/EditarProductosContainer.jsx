import React from "react";
import { connect } from "react-redux";
import EditarProductos from './EditarProductos'
import { withRouter} from "react-router"

class EditarProductosContainer extends React.Component {

  render() {
    return (
    <EditarProductos/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.logUserReducer.isLogged
  };
}; 
export default withRouter(connect(mapStateToProps, null)(EditarProductosContainer));
