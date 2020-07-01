import React from "react";
import { connect } from "react-redux";
import EditarCategoria from './EditarCategoria'
import { withRouter} from "react-router"

class EditarCategoriaContainer extends React.Component {

  render() {
    return (
    <EditarCategoria/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.logUserReducer.isLogged
  };
}; 
export default withRouter(connect(mapStateToProps, null)(EditarCategoriaContainer));
