import React from "react";
import { connect } from "react-redux";
import CrearProductos from './CrearProductos'
import { withRouter} from "react-router"
import { newProduct } from '../../../redux/actions/products'

class CrearProductosContainer extends React.Component {

  constructor(props){
    super(props)
    this.state={
      tipo:'',
      name:'',
      price:0,
      imageUno:'',
      imageDos:'',
      description:'',
      stock:0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hadleChange = this.hadleChange.bind(this)
  }

  handleSubmit(event){
    const { newProduct , history } = this.props
    event.preventDefault();
    newProduct(this.state).then(()=>{
      return history.push('/admin/productos')
    });
  };

  hadleChange(event){
    switch(event.target.name){
      case 'imagen1' : this.setState({imageUno:event.target.value}) 
      case 'imagen2' : this.setState({imageDos:event.target.value})
      case 'nombre' : this.setState({name:event.target.value})
      case 'descripcion' : this.setState({description:event.target.value})
      case 'categoria' : this.setState({tipo:event.target.value})
      case 'precio' : this.setState({price:event.target.value})
      case 'stock' : this.setState({stock:event.target.value})
    };
  };


  render() {
    return (
    <CrearProductos
      handleSubmit={this.handleSubmit}
      hadleChange={this.hadleChange}
    />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.logUserReducer.isLogged
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    newProduct : (product) => dispatch(newProduct(product))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CrearProductosContainer));
