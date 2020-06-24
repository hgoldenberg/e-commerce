import React from "react";
import { connect } from "react-redux";
//import { withRouter} from "react-router-dom"


//import { fetchAllProducts } from "../../redux/actions/singleProduct";

import Navbar from "./Navbar";

class NavbarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    
  }

  handlerChange(evt) {
    const value = evt.target.value;
    console.log("buscando");
    this.setState({ inputValue: value });
  }

//   handlerSubmit(event) {
    
//   }

  

  render() {
    return (
      <Navbar
        handlerChange={this.handlerChange}
        handlerSubmit={this.handlerSubmit}
        
      />
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     history: ownProps.history,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
    
//     }

  
//   };


export default connect(null, null)(NavbarContainer);