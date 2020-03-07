import React from "react";

import Error from "../parts/Error";
import Loading from "../parts/Loading";
import ProductListItem from "./ProductListItem";
import EmptyList from "../parts/EmptyList";
import useApi from "../../hooks/useApi";

const ProductList = props => {
    function useQuery() {
        return new URLSearchParams(props.location.search);
    }
    const query = useQuery();
    const q = query.get("q");
    const { value: products, error, loading } = useApi(`items?q=${q}`);

    if (loading) return <Loading />;
    else if (error !== null) return <Error {...error} />;
    else {
        const { name, lastname } = products.author;
        return loading ? (
            <Loading />
        ) : (
            <>
                <section className="ProductList__section container">
                    {!products.items.length ? (
                        <EmptyList />
                    ) : (
                        products.items.map(product => (
                            <ProductListItem
                                product={product}
                                key={product.id}
                            />
                        ))
                    )}
                </section>
            </>
        );
    }
};

export default ProductList;
