import React from "react";
import { Route, Switch } from "react-router";

import SingleProductContainer from "./singleProduct/SingleProductContainer";

export default () => {
  return (
    <div>
      <Switch>
        {/* <Route path="/" render={() => console.log("hola")} /> */}
        <Route exact path="/" component={SingleProductContainer} />
      </Switch>
    </div>
  );
};
