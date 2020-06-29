import React from "react";
import Carrito from "./Carrito";
import {withRouter} from 'react-router'
import { connect } from "react-redux";
import { buscarCarrito , deleteProductCarrito , updateProductSumar , updateProductRestar} from '../../redux/actions/carrito'


class CarritoContainer extends React.Component {
  
  constructor(props){
    super(props)
    this.state ={
      booleano:false,
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleInputSumar = this.handleInputSumar.bind(this);
    this.handleInputRestar = this.handleInputRestar.bind(this);
  }

  componentDidMount(){
      const { buscarCarrito , user  } = this.props
      buscarCarrito(user.id)
  }

  componentDidUpdate(prevProps, prevState){
    const {buscarCarrito , user } = this.props
    if(prevState.booleano !== this.state.booleano){
      buscarCarrito(user.id)
    } 
  }
  // eliminar un producto del carrito 
  handleDelete(carritoId , productId){
    const {deleteProductCarrito} = this.props
    deleteProductCarrito(carritoId , productId).then(() =>{
      return this.setState({
        booleano:!this.state.booleano
      })
    })
  };

  //updatear la cantidad del producto
  handleInputSumar(event,id){
    event.preventDefault()
    const { updateProductSumar , cart} = this.props
    const data = {
      carritoId:cart.id,
      productId:id,
    }
    updateProductSumar(data).then(()=>{
      return this.setState({ 
        booleano:!this.state.booleano,
      })
    })
  }
  // updatear la resta del producto 
  handleInputRestar(event,id){
    event.preventDefault()
    const { updateProductRestar , cart } = this.props
    const data = {
      carritoId:cart.id,
      productId:id,
    }
    updateProductRestar(data).then(()=>{
      return this.setState({ 
        booleano:!this.state.booleano,
      })
    })
  };
  
  handleClick() {
    const { history } = this.props;
    history.push('/productos')
  }

  render() {
    const { cart } = this.props;
    return (
      <Carrito 
        cart={cart} 
        handleDelete={this.handleDelete} 
        handleClick={this.handleClick}
        handleInputSumar={this.handleInputSumar}
        handleInputRestar={this.handleInputRestar}
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
    buscarCarrito: (id) => dispatch(buscarCarrito(id)),
    deleteProductCarrito: (carritoId , productId) => dispatch(deleteProductCarrito(carritoId, productId)),
    updateProductSumar: (ProductCarrito) => dispatch(updateProductSumar(ProductCarrito)),
    updateProductRestar: (ProductCarrito) => dispatch(updateProductRestar(ProductCarrito))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CarritoContainer))