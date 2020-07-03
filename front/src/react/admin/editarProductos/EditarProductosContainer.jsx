import React from "react";
import { connect } from "react-redux";
import EditarProductos from "./EditarProductos";
import { withRouter } from "react-router";
import { updateProduct } from "../../../redux/actions/admin";
import { fetchProduct } from "../../../redux/actions/products";

class EditarProductosContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: 0,
      imageUno: '',
      imageDos: '',
      description: '',
      stock: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { fetchProduct, idProduct } = this.props;
    fetchProduct(idProduct).then(data => {
      return this.setState({
        name: data.id.name,
        price: data.id.price,
        imageUno: data.id.imageUno,
        imageDos: data.id.imageDos,
        description: data.id.description,
        stock: data.id.stock
      });
    });
  }

  handleChange(event) {
    console.log(event.target.name)
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleSubmit(event) {
    const { updateProduct, idProduct, history } = this.props;
    event.preventDefault();
    updateProduct(idProduct, this.state).then(() => {
      return history.push("/admin/productos");
    });
  }

  render() {
    const {name , price , imageUno , imageDos , description , stock} = this.state
    return (
      <EditarProductos
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        name={name}
        price={price}
        imageUno={imageUno}
        imageDos={imageDos}
        description={description}
        stock={stock}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.logUserReducer.isLogged,
    idProduct: ownProps.match.params.id,
    producto: state.productsReducers.one
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateProduct: (id, product) => dispatch(updateProduct(id, product)),
    fetchProduct: id => dispatch(fetchProduct(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditarProductosContainer)
);
