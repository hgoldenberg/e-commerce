import React from "react";
import { Route, Switch } from "react-router";
import SingleProductContainer from "./singleProduct/SingleProductContainer";
import AllProductsContainer from "./allProducts/AllProductsContainer";
import NavbarContainer from './navbar/NavbarContainer';
import HomeContainer from './home/HomeContainer';
import LoginContainer from './login/LoginContainer';
import RegisterContainer from './register/RegisterContainer';
import CarritoContainer from './carrito/CarritoContainer';
import 'bootstrap/dist/css/bootstrap.min.css';


export default () => {
  return (
    <div>
      <NavbarContainer />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/productos" component={AllProductsContainer} />
        <Route exact path="/carrito" component={CarritoContainer} />
        <Route exact path="/login" component={LoginContainer}/>
        <Route exact path="/register" component={RegisterContainer}/>
        <Route exact path="/productos/:id" component={SingleProductContainer} />
      </Switch>
    </div>
  );
};
