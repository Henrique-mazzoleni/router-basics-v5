import { Fragment } from "react";
import { Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";

import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

import styles from "./App.module.css";

const App = () => {
  return (
    <Fragment>
      <MainHeader />
      <div className={styles.app}>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
      </div>
    </Fragment>
  );
};

export default App;
