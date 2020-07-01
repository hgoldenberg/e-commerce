import React from "react";
import { connect } from "react-redux";
import CrearCategoria from './CrearCategoria'
import { withRouter} from "react-router"

class CrearCategoriaContainer extends React.Component {

  render() {
    return (
    <CrearCategoria/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.logUserReducer.isLogged
  };
}; 
export default withRouter(connect(mapStateToProps, null)(CrearCategoriaContainer));
