import React from "react";
import { connect } from "react-redux";
import HomeAdmin from "../HomeAdmin";
import AdminProductos from "./AdminProductos";
import { withRouter } from "react-router";
import { fetchAllProducts } from "../../../redux/actions/products";

class AdminProductosContanier extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {
    const { product } = this.props
    return (
      <>
        <HomeAdmin isLogged={this.props.isLogged} />
        <AdminProductos productos={product}/>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.logUserReducer.isLogged,
    product: state.productsReducers.allProducts,
  };
};

const mapDispatchToProps = (dispatch) =>{
  return {
    fetchAllProducts: () => dispatch(fetchAllProducts())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AdminProductosContanier)
);
