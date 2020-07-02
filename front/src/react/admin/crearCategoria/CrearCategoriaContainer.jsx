import React from "react";
import { connect } from "react-redux";
import CrearCategoria from './CrearCategoria'
import { withRouter} from "react-router"
import { agregarCategoria } from '../../../redux/actions/admin'

class CrearCategoriaContainer extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      tipo:''
    },
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const data = event.target.value
    this.setState({
      tipo:data
    })
  };


  handleSubmit(event){
    const { agregarCategoria , history } = this.props
    event.preventDefault();
    agregarCategoria(this.state).then(()=>{
      history.push('/admin/categorias')
    })
  }

  render() {
    return (
    <CrearCategoria 
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      estado= {this.state.tipo}
    />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.logUserReducer.isLogged,
  };
}; 

const mapDispatchToProps = (dispatch) =>{
  return {
    agregarCategoria: (categoria) => dispatch(agregarCategoria(categoria))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CrearCategoriaContainer));
