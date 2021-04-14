import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Merch from "./Components/Merch/Merch";
import Cart from "./Components/Cart/Cart";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/merch" component={Merch} />
    <Route path="/cart" component={Cart} />
  </Switch>
);
