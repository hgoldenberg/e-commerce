import React from "react";
import { connect } from "react-redux";
import HomeAdmin from "./HomeAdmin"
import { withRouter} from "react-router"

class NavbarContainer extends React.Component {

  render() {
    return (
    <>  
      <HomeAdmin isLogged={this.props.isLogged}/>
    </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    history: ownProps.history,
    isLogged: state.logUserReducer.isLogged
  };
}; 

const mapDispatchToProps = (dispatch) => {
  return {
    searchProduct: (busqueda) => dispatch(searchProduct(busqueda)),
    doLogOut: () => dispatch(doLogOut()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavbarContainer));
