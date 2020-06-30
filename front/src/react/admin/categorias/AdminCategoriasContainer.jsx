import React from "react";
import { connect } from "react-redux";
import HomeAdmin from "../HomeAdmin";
import AdminCategorias from './AdminCategorias';
import { withRouter} from "react-router"
import { setAllCategories } from "../../../redux/actions/categories";

class AdminCategoriasContainer extends React.Component {

    constructor(props){
      super(props)
    }

    componentDidMount(){
      this.props.setAllCategories()
    };

  render() {
    const { categories } = this.props
    return (
    <>  
      <HomeAdmin isLogged={this.props.isLogged}/>
      <AdminCategorias categories={categories}/>
    </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.logUserReducer.isLogged,
    categories: state.categoriesReducer.categorias,
  };
}; 

const mapDispatchToProps = (dispatch) => {
  return {
    setAllCategories: () => dispatch(setAllCategories()),
    searchProduct: (busqueda) => dispatch(searchProduct(busqueda)),
    doLogOut: () => dispatch(doLogOut()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavbarContainer));
