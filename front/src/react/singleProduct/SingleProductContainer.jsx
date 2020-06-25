import React from "react";
import SingleProduct from "./SingleProduct";
import { fetchProduct } from "../../redux/actions/products";
import { agregarCarrito } from "../../redux/actions/carrito";

import { connect } from "react-redux";

class SingleProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.agregarProducto = this.agregarProducto.bind(this);
  }

  agregarProducto (){
    console.log('entro')
    const cart = {
      userId: this.props.user.id,
      product: this.props.id
    } 
    this.props.agregarCarrito(cart)
  };

  componentDidMount() {
    this.props.fetchProduct(this.props.id);
  }
  render() {
    return <SingleProduct product={this.props.product} agregarProducto={this.agregarProducto}/>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.productsReducers.one,
    id: ownProps.match.params.id,
    user:state.logUserReducer.isLogged
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    //agregarCarrito: (carrito) => dispatch(agregarCarrito(carrito))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductContainer);
