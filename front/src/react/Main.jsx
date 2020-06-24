import React from "react";
import { Route, Switch } from "react-router";

import SingleProductContainer from "./singleProduct/SingleProductContainer";
import AllProductsContainer from "./allProducts/AllProductsContainer";


export default () => {
  return (
    <div>
      <Switch>
        {/* <Route path="/" render={() => console.log("hola")} /> */}
        <Route exact path="/" component={SingleProductContainer} />
        <Route exact path="/productos" component={AllProductsContainer} />
        <Route exact path="/producto/:id" component={SingleProductContainer} />
      </Switch>
    </div>
  );
};
