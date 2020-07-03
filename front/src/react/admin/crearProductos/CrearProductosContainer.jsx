import React from "react";
import { connect } from "react-redux";
import CrearProductos from "./CrearProductos";
import { withRouter } from "react-router";
import { newProduct } from "../../../redux/actions/products";
import {
  setAllCategories,
  setOneCategorie
} from "../../../redux/actions/categories";
import { element } from "prop-types";

class CrearProductosContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tipo:[],
      name: "",
      price: 0,
      imageUno: "",
      imageDos: "",
      description: "",
      stock: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hadleChange = this.hadleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.setAllCategories();
  }

  handleSubmit(event) {
    const { newProduct, history } = this.props;
    event.preventDefault();
    newProduct(this.state).then(() => {
      return history.push("/admin/productos");
    });
  }

  handleClick(id) {
    console.log(this.state.tipo)
   if(this.state.tipo.includes(id)){
    let array = []; 
    array = this.state.tipo.filter(element => {
       if(element !== id){
         return element
       }
     })
     console.log(array)
     return this.setState({tipo:array})
   }else{
     return this.setState({tipo:[...this.state.tipo, id]})
   }

  }

  hadleChange(event) {
    switch (event.target.name) {
      case "imagen1":
        this.setState({ imageUno: event.target.value });
      case "imagen2":
        this.setState({ imageDos: event.target.value });
      case "nombre":
        this.setState({ name: event.target.value });
      case "descripcion":
        this.setState({ description: event.target.value });
      case "precio":
        this.setState({ price: event.target.value });
      case "stock":
        this.setState({ stock: event.target.value });
    }
  }

  render() {
    return (
      <CrearProductos
        handleSubmit={this.handleSubmit}
        hadleChange={this.hadleChange}
        categorias={this.props.categorias}
        handleClick={this.handleClick}
        x={this.state.tipo}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.logUserReducer.isLogged,
    categorias: state.categoriesReducer.categorias
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newProduct: product => dispatch(newProduct(product)),
    setAllCategories: () => dispatch(setAllCategories()),
    setOneCategorie: id => dispatch(setOneCategorie(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CrearProductosContainer)
);
