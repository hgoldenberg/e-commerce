import React from "react";
import Categories from "./Categories"
import { setOneCategorie } from "../../redux/actions/categories"





import { connect } from "react-redux";

class CategoriesContainer extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    this.props.setOneCategorie(this.props.id)
    
  }
  render() {
    return (
      <div>
        <Categories oneCat= {this.props.oneCat} categories= {this.props.categories}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  //console.log(state);
  return {
    oneCat: state.categoriesReducer.oneCat,
    id: ownProps.match.params.id,
    categories: state.categoriesReducer.categorias,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setOneCategorie: (id) => dispatch(setOneCategorie(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesContainer);
