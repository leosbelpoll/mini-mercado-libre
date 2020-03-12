import React from "react";
import { Link } from "react-router-dom";

import Price from "../parts/Price";

const ProductListItem = ({
    product: { city_name, title, price, picture, id, free_shipping }
}) => (
    <>
        <Link to={`/items/${id}`} className="product">
            <img src={picture} alt={title} className="icon" />
            <div className="info">
                <Price price={price} />
                {free_shipping && (
                    <img
                        className="freeshipping"
                        src="/images/freeshipping.png"
                        alt="Free shipping icon"
                    />
                )}
                <span className="title">{title}</span>
            </div>
            <span className="city">{city_name}</span>
        </Link>
    </>
);

export default ProductListItem;
