import React from "react";
import Carrito from "./Carrito";

import { connect } from "react-redux";
import { buscarCarrito } from '../../redux/actions/carrito'

class CarritoContainer extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  componentDidMount(){
      const { buscarCarrito , user} = this.props
      buscarCarrito(user.id)
  }

  render() {
    const { cart } = this.props
    return (
      <Carrito cart={cart}/>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    user:state.logUserReducer.isLogged,
    cart:state.carritoUser.cart
  }
};

const mapDispatchToProps = (dispatch) =>{
  return {
    buscarCarrito: (userid) => dispatch(buscarCarrito(userid))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarritoContainer);