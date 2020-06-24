import React from "react";
import Register from "./register";
import { connect } from "react-redux";
import { doRegister } from "../../redux/actions/register";

class RegisterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      lastname: "",
      direccion: ""
    };
    this.handleInputEmail = this.handleInputEmail.bind(this);
    this.handleInputPass = this.handleInputPass.bind(this);
    this.handleInputName = this.handleInputName.bind(this);
    this.handleInputLastName = this.handleInputLastName.bind(this);
    this.handleInputDirection = this.handleInputDirection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputEmail(event) {
    this.setState({ email: event.target.value });
  }
  handleInputPass(event) {
    this.setState({ password: event.target.value });
  }
  handleInputName(event) {
    this.setState({ name: event.target.value });
  }
  handleInputLastName(event) {
    this.setState({ lastname: event.target.value });
  }
  handleInputDirection(event) {
    this.setState({ direccion: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.doRegister(this.state);
    this.props.history.push("/login");
  }
  render() {
    return (
      <Register
        handleInputEmail={this.handleInputEmail}
        handleInputPass={this.handleInputPass}
        handleInputName={this.handleInputName}
        handleInputLastName={this.handleInputLastName}
        handleInputDirection={this.handleInputDirection}
        handleSubmit={this.handleSubmit}
        name={this.state.name}
        lastname={this.state.lastname}
        email={this.state.email}
        password={this.state.password}
        direccion={this.state.direccion}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    doRegister: input => dispatch(doRegister(input))
  };
};

export default connect(null, mapDispatchToProps)(RegisterContainer);