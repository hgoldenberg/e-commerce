import React from "react";
import { connect } from "react-redux";
import HomeAdmin from "../HomeAdmin";
import AdminClientes from './AdminClientes';
import { withRouter} from "react-router";
import { fetchAllUsers } from "../../../redux/actions/admin";

class AdminClientesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boolean: false,
    }
  }


  componentDidMount() {
    
    this.props.fetchAllUsers().then(()=>{
      return this.setState({
        boolean: !this.state.boolean
      })
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.boolean !== this.state.boolean  ){
      this.props.fetchAllUsers()
    }

  }

  render() {
    console.log(this.props.users)
    return (
    <>  
      <HomeAdmin isLogged={this.props.isLogged}/>
      <AdminClientes isLogged={this.props.isLogged} users={this.props.users}/>
    </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.logUserReducer.isLogged,
    users: state.adminReducer.users,
  };
}; 

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminClientesContainer));
