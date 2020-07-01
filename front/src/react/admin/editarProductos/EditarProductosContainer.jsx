import React from "react";
import { connect } from "react-redux";
import EditarProductos from './EditarProductos'
import { withRouter} from "react-router";
import { updateProduct } from '../../../redux/actions/admin';
import { fetchProduct } from '../../../redux/actions/products'

class EditarProductosContainer extends React.Component {

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
      categoriaId:0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    const { fetchProduct , idProduct} = this.props
    fetchProduct(idProduct)
  };


  handleChange(event){
    switch(event.target.name){
      case 'imagen1' : this.setState({imageUno:event.target.value}) 
      case 'imagen2' : this.setState({imageDos:event.target.value})
      case 'nombre' : this.setState({name:event.target.value})
      case 'description' : this.setState({description:event.target.value})
      case 'categoria' : this.setState({tipo:event.target.value})
      case 'precio' : this.setState({price:event.target.value})
      case 'stock' : this.setState({stock:event.target.value})
    };
  };

  handleSubmit(event){
    const { updateProduct , idProduct , history} = this.props
    event.preventDefault();
    updateProduct(idProduct , this.state).then(()=>{
      return history.push('/admin/productos')
    });
  };

  render() {
    return (
    <EditarProductos
      handleSubmit={this.handleSubmit}
      handleChange={this.handleChange}
    />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.logUserReducer.isLogged,
    idProduct: ownProps.match.params.id,
    producto:state.productsReducers.one
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateProduct: (id, product) => dispatch(updateProduct(id,product)),
    fetchProduct:(id) => dispatch(fetchProduct(id))
  };
}; 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditarProductosContainer));
