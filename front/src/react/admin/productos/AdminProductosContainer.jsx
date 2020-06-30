import React from "react";
import { connect } from "react-redux";
import HomeAdmin from "../HomeAdmin"
import AdminProductos from './AdminProductos';
import { withRouter} from "react-router"

class AdminProductosContanier extends React.Component {

  render() {
    return (
    <>  
      <HomeAdmin isLogged={this.props.isLogged}/>
      <AdminProductos />
    </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.logUserReducer.isLogged
  };
}; 


export default withRouter(connect(mapStateToProps, null)(AdminProductosContanier));
