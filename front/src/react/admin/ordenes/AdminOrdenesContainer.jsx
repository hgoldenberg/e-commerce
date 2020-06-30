import React from "react";
import { connect } from "react-redux";
import HomeAdmin from "../HomeAdmin";
import AdminOrdenes from './AdminOrdenes';
import { withRouter} from "react-router"

class AdminOrdenesContainer extends React.Component {

  render() {
    return (
    <>  
      <HomeAdmin isLogged={this.props.isLogged}/>
      <AdminOrdenes/>
    </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.logUserReducer.isLogged
  };
}; 

export default withRouter(connect(mapStateToProps, null)(AdminOrdenesContainer));
