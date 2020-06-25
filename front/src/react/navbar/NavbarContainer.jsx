import React from "react";
import { connect } from "react-redux";
import {doLogOut} from "../../redux/actions/logUser"
//import { withRouter} from "react-router-dom"

import { searchProduct } from "../../redux/actions/products";

//import { fetchAllProducts } from "../../redux/actions/singleProduct";

import Navbar from "./Navbar";

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerChange(evt) {
    const value = evt.target.value;
    console.log("buscando");
    this.setState({ inputValue: value });
  }

  handlerSubmit(event) {
    event.preventDefault();
    this.props.searchProduct(this.state.inputValue);
    this.setState({ inputValue: "" });
  }

  render() {
    return (
      <Navbar
        handlerChange={this.handlerChange}
        handlerSubmit={this.handlerSubmit}
        valor={this.state.inputValue}
        isLogged={this.props.isLogged}
        doLogOut={this.props.doLogOut}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
