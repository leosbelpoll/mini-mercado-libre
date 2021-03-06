import React from "react";
import { useParams } from "react-router";

import Price from "../parts/Price";
import Error from "../parts/Error";
import Loading from "../parts/Loading";
import useApi from "../../hooks/useApi";
import BreadCrumbs from "../parts/BreadCrumbs";
import MetaTags from "../parts/MetaTags";
import { getFormatedNumber } from "../../utils/number";
import { getEnv } from "../../utils/env";

const ProductDetail = () => {
    const { id } = useParams();
    const { value: product, error, loading } = useApi(`items/${id}`);

    if (loading) return <Loading />;
    else if (error !== null) return <Error {...error} />;
    else {
        const {
            picture,
            title,
            condition,
            price,
            description,
            sold_quantity,
            category
        } = product.item;
        const { name, lastname } = product.author;
        const formattedPrice = `${price.currency} ${getFormatedNumber(
            `${price.amount}.${price.decimals}`
        )}`;

        return (
            <>
                <MetaTags
                    title={`${title} - ${formattedPrice}`}
                    metas={[
                        {
                            name: "description",
                            content: `Compralo a ${formattedPrice}. Encontrá más productos de ${category} en ${getEnv("APP_NAME")}`
                        },
                        {
                            name: "author",
                            content: `${name} ${lastname}`
                        }
                    ]}
                />
                <BreadCrumbs breadCrumbs={[category]} />
                <section className="ProductDetail__section container">
                    <img src={picture} alt={title} className="icon" />
                    <aside className="details">
                        <span className="sell">
                            {condition} - {sold_quantity} vendidos
                        </span>
                        <h3 className="title">{title}</h3>
                        <br />
                        <span className="price">
                            <Price price={price} showDecimals />
                        </span>
                        <button className="buy">Comprar</button>
                    </aside>
                    <section className="description">
                        <h3 className="description-title">
                            Descripción del producto
                        </h3>
                        <p className="description-text">{description}</p>
                    </section>
                </section>
            </>
        );
    }
};

export default ProductDetail;
