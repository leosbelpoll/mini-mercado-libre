import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./components/parts/Home";
import Header from "./components/parts/Header";
import ProductList from "./components/products/ProductList";
import ProductDetail from "./components/products/ProductDetail";
import Error from "./components/parts/Error";
import MetaTags from "./components/parts/MetaTags";
import "./styles/App.scss";

const App = () => (
    <>
        <HelmetProvider>
            <MetaTags
                metas={[
                    {
                        name: "author",
                        content: `${process.env.REACT_APP_AUTHOR_NAME || "Leosbel"} ${process.env.REACT_APP_AUTHOR_LASTNAME || "Poll"}`
                    }
                ]}
            />
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/items" component={ProductList} />
                    <Route exact path="/items/:id" component={ProductDetail} />
                    <Route path="*" render={() => <Error status={404} message="Esta página no existe"/>} />
                </Switch>
            </Router>
        </HelmetProvider>
    </>
);

export default App;
