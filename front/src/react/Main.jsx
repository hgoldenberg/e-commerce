import React from "react";
import { Route, Switch } from "react-router";
import SingleProductContainer from "./singleProduct/SingleProductContainer";
import AllProductsContainer from "./allProducts/AllProductsContainer";
import NavbarContainer from "./navbar/NavbarContainer";
import HomeContainer from "./home/HomeContainer";
import LoginContainer from "./login/LoginContainer";
import RegisterContainer from "./register/RegisterContainer";
import CarritoContainer from "./carrito/CarritoContainer";
import CategoriesContainer from "./categories/CategoriesContainer"
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { persistSession } from "../redux/actions/logUser";

class Main extends React.Component {
  
  constructor (props){
    super(props)
  }

  componentDidMount() {
    this.props.persistSession()
  }
  
  render() {
    return (
      <div>
        <NavbarContainer />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/productos" component={AllProductsContainer} />
          <Route exact path="/categoria" component={AllProductsContainer} />
          <Route exact path="/categoria/:id" component={CategoriesContainer} />
          <Route exact path="/carrito" component={CarritoContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
          <Route
            exact
            path="/productos/:id"
            component={SingleProductContainer}
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    persistSession : () => dispatch(persistSession())
  };
};

export default connect(null, mapDispatchToProps)(Main);
