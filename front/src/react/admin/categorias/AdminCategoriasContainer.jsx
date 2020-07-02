import React from "react";
import { connect } from "react-redux";
import HomeAdmin from "../HomeAdmin";
import AdminCategorias from './AdminCategorias';
import { withRouter} from "react-router"
import { setAllCategories } from "../../../redux/actions/categories";
import { deleteCategorias } from '../../../redux/actions/admin'

class AdminCategoriasContainer extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        boolean: false
      }
      this.handleClick = this.handleClick.bind(this);
    }

    componentDidUpdate(prevProps,prevState){
      const { setAllCategories } = this.props
      if(prevState.boolean !== this.state.boolean){
        setAllCategories()
      }
    };

    componentDidMount(){
      this.props.setAllCategories()
    };

    handleClick(id){
      const { deleteCategorias } = this.props
      deleteCategorias(id).then(()=>{
        return this.setState({
          boolean:!this.state.boolean
        })
      });
    };  

  render() {
    const { categories } = this.props
    return (
    <>  
      <HomeAdmin isLogged={this.props.isLogged}/>
      <AdminCategorias 
      categories={categories}
      handleClick={this.handleClick}
      />
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
    deleteCategorias: (id) => dispatch(deleteCategorias(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminCategoriasContainer));
