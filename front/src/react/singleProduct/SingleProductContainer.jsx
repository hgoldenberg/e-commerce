import React from "react";
import SingleProduct from "./SingleProduct";
import { fetchProduct } from "../../redux/actions/products";
import { agregarCarrito } from "../../redux/actions/carrito";
import { setAllComentariosProduct } from "../../redux/actions/comentarios";
import { setRatingProduct, setAllPuntajesProduct } from "../../redux/actions/puntaje";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class SingleProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.agregarProducto = this.agregarProducto.bind(this);
  }

  agregarProducto() {
    const cart = {
      userId: this.props.user.id,
      product: this.props.id
    };
    if (this.props.user) {
      this.props.agregarCarrito(cart);
      setTimeout(() => {
        return this.props.history.push("/carrito");
      }, 1000);
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProduct: id => dispatch(fetchProduct(id)),
    agregarCarrito: carrito => dispatch(agregarCarrito(carrito)),
    setAllComentariosProduct: productId => dispatch(setAllComentariosProduct(productId)),
    setRatingProduct: productId => dispatch(setRatingProduct(productId)),
    setAllPuntajesProduct: productId => dispatch(setAllPuntajesProduct(productId))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SingleProductContainer)
);
