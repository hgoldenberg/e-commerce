import React from "react";
import { connect } from "react-redux";
import { doLogIn } from "../../redux/actions/logUser";
import Login from "./Login";
import { storageCart } from '../../redux/actions/carrito';
import { serDeleteStorage } from '../../redux/actions/products'

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
    this.props.doLogIn(email , password)
    .then(() => {
      this.props.storageCart({storage: this.props.carrito})
      .then(() => {
        this.props.serDeleteStorage([])
        this.props.history.push("/");
      })
    });
    
    
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

const mapStateToProps = (state) => {
  return {
    carrito: state.productsReducers.carrito
  }
}

const mapDispatchToProps = dispatch => {
  return {
    doLogIn: (email , password ) => dispatch(doLogIn(email ,password)),
    storageCart: (obj) => dispatch(storageCart(obj)),
    serDeleteStorage: (id) => dispatch(serDeleteStorage(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);