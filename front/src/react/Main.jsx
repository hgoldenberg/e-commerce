import React from "react";
import { Route, Switch } from "react-router";
import LoginContainer from "./login/LoginContainer"
import RegisterContainer from "./register/RegisterContainer"

import SingleProductContainer from "./singleProduct/SingleProductContainer";
import AllProductsContainer from "./allProducts/AllProductsContainer";


export default () => {
  return (
    <div>
      <Switch>
        
        <Route exact path="/" component={SingleProductContainer} />
        <Route exact path="/productos" component={AllProductsContainer} />
        <Route exact path="/product/:id" component={SingleProductContainer} />
        <Route exact path="/login" component={LoginContainer}/>
        <Route exact path="/register" component={RegisterContainer}/>

      </Switch>
    </div>
  );
};
