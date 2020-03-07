import React from "react";

import Error from "../parts/Error";
import Loading from "../parts/Loading";
import ProductListItem from "./ProductListItem";
import EmptyList from "../parts/EmptyList";
import BreadCrumbs from "../parts/BreadCrumbs";
import MetaTags from "../parts/MetaTags";
import useApi from "../../hooks/useApi";
import { getEnv } from "../../utils/env";
import { getCapitalized } from "../../utils/text";

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
        const capitalQ = getCapitalized(q);
        const { name, lastname } = products.author;
        return loading ? (
            <Loading />
        ) : (
            <>
                <MetaTags
                    title={capitalQ}
                    metas={[
                        {
                            name: "description",
                            content: `Encontrá ${capitalQ} en ${getEnv("APP_NAME")}. Descubrí la mejor forma de comprar online.`
                        },
                        {
                            name: "author",
                            content: `${name} ${lastname}`
                        }
                    ]}
                />
                <BreadCrumbs breadCrumbs={products.categories} />
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
