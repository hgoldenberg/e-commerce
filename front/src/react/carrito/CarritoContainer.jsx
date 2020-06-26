import React from "react";
import Carrito from "./Carrito";

import { connect } from "react-redux";
import { buscarCarrito , deleteProductCarrito } from '../../redux/actions/carrito'
import { element } from "prop-types";

class CarritoContainer extends React.Component {
  
  constructor(props){
    super(props)
    this.state ={
      carrito:[]
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
      const { buscarCarrito , user  } = this.props
      buscarCarrito(user.id).then(data => {
        return this.setState({
          carrito:data.cart.products,
        })
      })
  }

  handleDelete(carritoId , productId){
    const {deleteProductCarrito} = this.props
    deleteProductCarrito(carritoId , productId)
  };
 

  render() {
    const { cart } = this.props;
    const { carrito } = this.state
    return (
      <Carrito 
        cart={cart} 
        handleDelete={this.handleDelete} 
        sumar={carrito}
      />
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
    buscarCarrito: (userid) => dispatch(buscarCarrito(userid)),
    deleteProductCarrito: (carritoId , productId) => dispatch(deleteProductCarrito(carritoId, productId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarritoContainer);