import React from "react";
import { connect } from "react-redux";
import Checkout from './Checkout';
import { withRouter} from "react-router";
import { finalCarrito , buscarCarrito} from '../../redux/actions/carrito'

class CheckoutContainer extends React.Component {

  constructor(props){
    super(props)
    this.state ={
      dir_entrega:'',
      ciudad_entrega:'',
      CP_entrega:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  componentDidMount(){
    const { user } = this.props
    buscarCarrito(user.id)
  };

  handleChange(event){
    switch(event.target.name){
      case 'codigoPostal' :  this.setState({CP_entrega:event.target.value});
      case 'ciudadEntraga' : this.setState({ciudad_entrega:event.target.value});
      case 'direccionEntrega': this.setState({dir_entrega:event.target.value});
    }
  };

  handleSubmit(event){
    event.preventDefault();
    const { finalCarrito , user , history} = this.props
    finalCarrito(user.id, this.state).then(()=>{
      return history.push('/reviews')
    });
  };

  render() {
    const { cart , user} = this.props
    return (
      <Checkout 
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        cart={ cart }
        user={user}
      />
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    user: state.logUserReducer.isLogged,
    cart:state.carritoUser.cart
  }
};

const mapDispatchToProps = (dispatch) =>{
  return {
    finalCarrito: (id, carritoFinalizado) => dispatch(finalCarrito(id, carritoFinalizado)),
    buscarCarrito: (id) => dispatch(buscarCarrito(id))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer));
