import React from "react";
import { connect } from "react-redux";
import {doLogOut} from "../../redux/actions/logUser"
import { withRouter} from "react-router"
import { searchProduct } from "../../redux/actions/products";
import Navbar from "./Navbar";

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      user: false
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handlerChange(evt) {
    const value = evt.target.value;
    this.setState({ inputValue: value });
  }

  handlerSubmit(event) {
    event.preventDefault();
    this.props.searchProduct(this.state.inputValue);
    this.setState({ inputValue: "" });
  }

  handleClick(){
    if(this.state.user == false){
        this.setState({user: true});
    } 
    else if(this.state.user == true){
        this.setState({user: false});
    }
}

  render() {
    return (
      <Navbar
        handlerChange={this.handlerChange}
        handlerSubmit={this.handlerSubmit}
        handleClick={this.handleClick}
        valor={this.state.inputValue}
        isLogged={this.props.isLogged}
        doLogOut={this.props.doLogOut}
        user={this.state.user}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavbarContainer));
