import React from "react";
import { connect } from "react-redux";
import HomeAdmin from "../HomeAdmin";
import AdminClientes from './AdminClientes';
import { withRouter} from "react-router";
import { fetchAllUsers } from "../../../redux/actions/admin";
import { updateAdmin } from "../../../redux/actions/admin";
import { updateUser } from "../../../redux/actions/admin";


class AdminClientesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boolean: false,
    
    }
    this.handleUser = this.handleUser.bind(this);
    this.handleAdmin = this.handleAdmin.bind(this);
  }

  handleUser(id){
    event.preventDefault()
    const {updateUser} = this.props
    updateUser(id)
    .then(()=>{
     return this.setState({
        boolean: !this.state.boolean
      })
    })
    
  }

  handleAdmin(id){
    event.preventDefault()
    const {updateAdmin} = this.props
    updateAdmin(id)
    .then(()=>{
      return this.setState({
        boolean: !this.state.boolean
      })
    })
    
  }

  componentDidMount() {
    //console.log(this.props.userId)
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
    
    
    return (
    <>  
      <HomeAdmin isLogged={this.props.isLogged}/>
      <AdminClientes isLogged={this.props.isLogged} 
      users={this.props.users}
      handleUser={this.handleUser}
      handleAdmin={this.handleAdmin}
      updateAdmin={this.props.updateAdmin}
      updateUser={this.props.updateUser} 
      />
    </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.logUserReducer.isLogged,
    users: state.adminReducer.users,
    userId: ownProps.match.params.id
  };
}; 

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    updateAdmin: (id) => dispatch(updateAdmin(id)),
    updateUser: (id) => dispatch(updateUser(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminClientesContainer));
