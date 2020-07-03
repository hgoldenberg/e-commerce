import React from "react";
import { connect } from "react-redux";
import FormUser from './FormUser'
import { setEditar } from '../../redux/actions/logUser'
import { withRouter} from "react-router"

class FormUserContainer extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      avatar: ''
    },
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const data = event.target.value
    this.setState({
      avatar:data
    })
  };


  handleSubmit(event){
    const { history } = this.props
    event.preventDefault();
    this.props.setEditar(this.state)
    .then(() => {
        history.push('/misdatos')
    })    
  }

  render() {
    return (
    <FormUser 
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      estado= {this.state.avatar}
    />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.logUserReducer.isLogged,
  };
}; 

const mapDispatchToProps = (dispatch) =>{
  return {
    setEditar: obj => dispatch(setEditar(obj))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormUserContainer));
