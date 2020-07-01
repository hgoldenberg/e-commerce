import React from "react";
import { connect } from "react-redux";
import HomeAdmin from "../HomeAdmin";
import AdminProductos from "./AdminProductos";
import { withRouter } from "react-router";
import { fetchAllProducts } from "../../../redux/actions/products";
import { deleteProduct } from '../../../redux/actions/admin'

class AdminProductosContanier extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      boolean:false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(prevProps, prevState){
    const { fetchAllProducts } = this.props
    if(prevState.boolean !== this.state.boolean){
        fetchAllProducts();
    };
  };

  componentDidMount() {
    this.props.fetchAllProducts();
  }

  handleClick(id){
    const {deleteProduct} = this.props;
    deleteProduct(id).then(()=>{
      return this.setState({
        boolean:!this.state.boolean
      })
    });
  };

  render() {
    const { product } = this.props
    return (
      <>
        <HomeAdmin isLogged={this.props.isLogged} />
        <AdminProductos 
        productos={product}
        handleClick={this.handleClick}
        />
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
    fetchAllProducts: () => dispatch(fetchAllProducts()),
    deleteProduct: (id) => dispatch(deleteProduct(id))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AdminProductosContanier)
);
