import React from "react";
import { connect } from "react-redux";
import EditarCategoria from './EditarCategoria'
import { withRouter} from "react-router"
import {updateCategorias} from '../../../redux/actions/admin'

class EditarCategoriaContainer extends React.Component {

  constructor(props){
    super(props)
    this.state={
      tipo:''
    }
    this.handleOnchange= this.handleOnchange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnchange(event){
    const data = event.target.value;
    this.setState({
      tipo:data
    })
  };

  handleSubmit(event){
    const { updateCategorias , categoriesId , history} = this.props
    event.preventDefault();
    updateCategorias(categoriesId,this.state).then(()=>{
      return history.push("/admin/categorias")
    });
  };

  render() {
    return (
    <EditarCategoria 
      handleSubmit={this.handleSubmit}
      handleOnchange={this.handleOnchange}
    />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.logUserReducer.isLogged,
    categoriesId : ownProps.match.params.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCategorias : (id, categoria) => dispatch(updateCategorias(id,categoria))
  };
}; 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditarCategoriaContainer));
