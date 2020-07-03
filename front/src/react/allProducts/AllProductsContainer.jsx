import React from "react";
import AllProducts from "./AllProducts";
import { fetchAllProducts } from "../../redux/actions/products";
import { setAllCategories } from "../../redux/actions/categories";
import { setRatingProduct } from "../../redux/actions/puntaje";
import { connect } from "react-redux";

class AllProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      boolean:false
    };
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.boolean !== this.state.boolean){
      this.props.fetchAllProducts().then(data => {
        return data.product.map(element => {
          return setRatingProduct(element.id)
        });
      });
      this.props.setAllCategories();
    };
  };

  componentDidMount() {
    this.props.fetchAllProducts().then(data => {
      return data.product.map(element => {
        return setRatingProduct(element.id)
      })
    })
    this.props.setAllCategories();
  }
  render() {
    return (
      <div>
        <AllProducts
          product={this.props.product}
          categories={this.props.categories}
          rating={this.props.rating}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.productsReducers.allProducts,
    categories: state.categoriesReducer.categorias,
    rating: state.puntajeReducer.star,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: () => dispatch(fetchAllProducts()),
    setAllCategories: () => dispatch(setAllCategories()),
    setRatingProduct: productId => dispatch(setRatingProduct(productId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllProductsContainer);
