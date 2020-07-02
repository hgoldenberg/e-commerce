import React from "react";
import { connect } from "react-redux";
import ReviewList from './ReviewList';
import { withRouter} from "react-router"
import { buscarCarrito} from '../../redux/actions/carrito';

class ReviewListContainer extends React.Component {

  componentDidMount(){
    const { user, cart } = this.props
    buscarCarrito(user.id);
  };

  render() {

    const { cart, user } = this.props
    return (
      <ReviewList
      cart={ cart }
      user={ user }
      />
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    user: state.logUserReducer.isLogged,
    cart: state.carritoUser.cart
  }
};

const mapDispatchToProps = (dispatch) =>{
  return {
    buscarCarrito: (id) => dispatch(buscarCarrito(id))
  }
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewListContainer));
