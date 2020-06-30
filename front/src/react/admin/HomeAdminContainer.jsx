import React from "react";
import { connect } from "react-redux";
import HomeAdmin from "./HomeAdmin"
import { withRouter} from "react-router"

class HomeAdminContainer extends React.Component {

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
    isLogged: state.logUserReducer.isLogged
  };
}; 

export default withRouter(connect(mapStateToProps, null)(HomeAdminContainer));
