import React from "react";
import { connect } from "react-redux";
import HomeAdmin from "../HomeAdmin";
import AdminOrdenes from './AdminOrdenes';
import { withRouter} from "react-router"
import { getHistory } from '../../../redux/actions/compras'

class AdminOrdenesContainer extends React.Component {

  constructor(props){
    super(props)
    this.state ={
      booleano:false,
    }
  }

  componentDidUpdate(prevProps, prevState){
    const { getHistory } = this.props
    if(prevState.booleano !== this.state.booleano){
      getHistory()
    }
  };

  componentDidMount(){
    const { getHistory } = this.props;
    getHistory().then(()=>{
      return this.setState({
        booleano:!this.state.booleano
      })
    })
  }

  render() {
    const { history } = this.props
    return (
    <>  
      <HomeAdmin isLogged={this.props.isLogged}/>
      <AdminOrdenes history={history}/>
    </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLogged: state.logUserReducer.isLogged,
    history: state.comprasReducer.data
  };
}; 

const mapDispatchToProps = (dispatch) =>{
  return {
    getHistory : () => dispatch(getHistory())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdminOrdenesContainer));
