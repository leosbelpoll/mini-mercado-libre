import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/parts/Home";
import Header from "./components/parts/Header";
import ProductList from "./components/products/ProductList";
import ProductDetail from "./components/products/ProductDetail";
import Error from "./components/parts/Error";
import "./styles/App.scss";

const App = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/items" component={ProductList} />
            <Route exact path="/items/:id" component={ProductDetail} />
            <Route path="*" render={() => <Error status={404}/>} />
        </Switch>
    </Router>
);

export default App;
