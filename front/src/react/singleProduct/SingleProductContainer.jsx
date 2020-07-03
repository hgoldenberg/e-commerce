import React from "react";
import SingleProduct from "./SingleProduct";
import { fetchProduct, setAgregar, setStorage } from "../../redux/actions/products";
import { agregarCarrito } from "../../redux/actions/carrito";
import { setAllComentariosProduct } from "../../redux/actions/comentarios";
import { setRatingProduct, setAllPuntajesProduct } from "../../redux/actions/puntaje";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class SingleProductContainer extends React.Component {
    
      
  constructor(props) {
    super(props);
  
    this.state = {
      dataCart: []
    }
    this.agregarProducto = this.agregarProducto.bind(this);
    this.noLogeadoCarrito = this.noLogeadoCarrito.bind(this);
  }

  agregarProducto(product) {
    const cart = {
      userId: this.props.user.id,
      product: product
    };

		this.state.dataCart.push(cart);

    if (this.props.user) {
      this.props.agregarCarrito(cart);
      setTimeout(() => {
        return this.props.history.push("/carrito");
      }, 1000);
    }
  };

  noLogeadoCarrito(producto){
    console.log(this.props.cartStorage)
    if(!this.props.cartStorage.includes(producto)){
      this.props.setAgregar(producto)
      this.props.setStorage()
    }   
  };

  componentDidMount() {
    this.props.fetchProduct(this.props.id);
    this.props.setAllComentariosProduct(this.props.id)
    this.props.setRatingProduct(this.props.id)
    this.props.setAllPuntajesProduct(this.props.id)
  }
  render() {
   
    return (
      <SingleProduct
        product={this.props.product}
        agregarProducto={this.agregarProducto}
        comentarios={this.props.comentarios}
        rating={this.props.rating}
        stars={this.props.stars}
        carrito={this.noLogeadoCarrito}
        user={this.props.user}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.productsReducers.one,
    id: ownProps.match.params.id,
    user: state.logUserReducer.isLogged,
    comentarios: state.comentarioReducer.data,
    rating: state.puntajeReducer.star,
    stars: state.puntajeReducer.stars,
    cartStorage: state.productsReducers.carrito
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProduct: id => dispatch(fetchProduct(id)),
    agregarCarrito: carrito => dispatch(agregarCarrito(carrito)),
    setAllComentariosProduct: productId => dispatch(setAllComentariosProduct(productId)),
    setRatingProduct: productId => dispatch(setRatingProduct(productId)),
    setAllPuntajesProduct: productId => dispatch(setAllPuntajesProduct(productId)),
    setAgregar: id => dispatch(setAgregar(id)) ,
    setStorage: () => dispatch(setStorage())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SingleProductContainer)
);
