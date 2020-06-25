import React from "react";
import { connect } from "react-redux";
import { doLogIn } from "../../redux/actions/logUser";
import Login from "./Login";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      
    };
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePassInput = this.handlePassInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEmailInput(event) {
    this.setState({ email: event.target.value });
  }
  handlePassInput(event) {
    this.setState({ password: event.target.value });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const { email , password } = this.state
    this.props.doLogIn(email , password);
    this.setState({
      email:'',
      password:''
    })
    this.props.history.push("/");
  }
  render() {
    return (
      <Login
        handleEmailInput={this.handleEmailInput}
        handlePassInput={this.handlePassInput}
        handleSubmit={this.handleSubmit}
        email={this.state.email}
        password={this.state.password}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    doLogIn: (email , password ) => dispatch(doLogIn(email ,password))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginContainer);