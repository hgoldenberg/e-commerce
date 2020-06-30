import React from "react";
import { connect } from "react-redux";
import HomeAdmin from "../HomeAdmin";
import AdminCategorias from './AdminCategorias';
import { withRouter} from "react-router"

class AdminCategoriasContainer extends React.Component {

  render() {
    return (
    <>  
      <HomeAdmin isLogged={this.props.isLogged}/>
      <AdminCategorias/>
    </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.logUserReducer.isLogged
  };
}; 

export default withRouter(connect(mapStateToProps, null)(AdminCategoriasContainer));
