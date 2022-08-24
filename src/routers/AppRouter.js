import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  CartDrawer,
  HomeView,
  Nav,
  ProductView,
  ScrollToTop,
  ShopView,
} from "../config/C4";

const AppRouter = ({toggleCartDrawer, cartDrawerActive, }) => {
  return (
    <Router>
      <Nav toggleCartDrawer={toggleCartDrawer}/>
      <CartDrawer toggleCartDrawer={toggleCartDrawer} active={cartDrawerActive} />
      <div className="container">
        <Route path="/" exact component={HomeView} />
        <ScrollToTop />
        <Switch>
          <Route path="/product/:id" exact component={ProductView} />
          <Route path="/shop" exact component={ShopView} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;