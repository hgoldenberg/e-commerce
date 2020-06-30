import React from "react";
import { connect } from "react-redux";
import HomeAdmin from "../HomeAdmin";
import AdminClientes from './AdminClientes';
import { withRouter} from "react-router"

class AdminClientesContainer extends React.Component {

  render() {
    return (
    <>  
      <HomeAdmin isLogged={this.props.isLogged}/>
      <AdminClientes isLogged={this.props.isLogged}/>
    </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.logUserReducer.isLogged
  };
}; 
export default withRouter(connect(mapStateToProps, null)(AdminClientesContainer));
