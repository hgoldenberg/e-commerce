import React from "react";
import Register from "./Register";
import { connect } from "react-redux";
import { doRegister } from "../../redux/actions/register";
import {isValidName,isValidEmail, isValidPass,isValidAddress} from "../register/validaciones"



  
class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: "",
      password: "",
      name: "",
      address: "",
      email:"",
      errorName: false,
      errorLast: false,
      errorEmail:false,
      errorPass:false,
      errorAddress: false

    };

    this.nameChange = this.nameChange.bind(this)
    this.passwordChange = this.passwordChange.bind(this)
    this.emailChange = this.emailChange.bind(this)
    this.lastNameChange = this.lastNameChange.bind(this)
    this.addressChange = this.addressChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
  }

  
  nameChange(evt) {
    const value = evt.target.value;
    this.setState({ name: value, errorName:isValidName(value) });
  }
  emailChange(evt) {
    const value = evt.target.value;
    this.setState({ email: value, errorEmail:isValidEmail(value) });
  }
  passwordChange(evt) {
    const value = evt.target.value;
    console.log("pass",isValidPass(value))
    this.setState({ password: value, errorPass:isValidPass(value) });

  }
  lastNameChange(evt) {
    const value = evt.target.value;
    this.setState({ lastName: value, errorLast:isValidName(value) });
  }
  addressChange(evt) {
    const value = evt.target.value;
    this.setState({ address: value, errorAddress:isValidAddress(value) });
  }
  

  handleSubmit(event) {
    event.preventDefault();
    const obj = {
    email:this.state.email, 
    name: this.state.name, 
    password: this.state.password, 
    lastname: this.state.lastName, 
    direccion: this.state.address}

    this.props.doRegister(obj)
    // .then (()=> {
    //   this.props.history ("/login")
    // })
  }

  render() {
    return (
      <Register
      errorPass = {this.state.errorPass}
      errorAddress = {this.state.errorAddress}
      errorName = {this.state.errorName}
      errorLast = {this.state.errorLast}
      errorEmail = {this.state.errorEmail}
      nameChange={this.nameChange}
      passwordChange={this.passwordChange}
      lastNameChange={this.lastNameChange}
      addressChange={this.addressChange}
      emailChange={this.emailChange}
      
      handleSubmit={this.handleSubmit}


      name={this.state.name}
      lastName={this.state.lastName}
      email={this.state.email}
      password={this.state.password}
      address={this.state.address}
      tipo="Registrarse"
      />
    )
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    doRegister: (objeto) => {
      dispatch(doRegister(objeto)).then(() => {
        ownProps.history.push("/login");
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(RegisterContainer);


