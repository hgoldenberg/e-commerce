import React from "react";
import MisDatos from "./misDatos";
import { connect } from "react-redux";
import { getHistoryUser } from '../../redux/actions/compras'
import { withRouter } from 'react-router';

class MisDatosContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id){
    const { getHistoryUser , history } = this.props;
    getHistoryUser(id)
    history.push('/historial')
  };

  render() {
    return <MisDatos isLogged={this.props.isLogged} handleClick={this.handleClick}></MisDatos>;
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged: state.logUserReducer.isLogged,
  };
};

const mapDispatchToProps = (dispatch) =>{
  return {
    getHistoryUser : (id) => dispatch(getHistoryUser(id))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MisDatosContainer));
