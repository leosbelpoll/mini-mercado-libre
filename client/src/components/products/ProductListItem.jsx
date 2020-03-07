import React from "react";
import { Link } from "react-router-dom";

import Price from "../parts/Price";

const ProductListItem = ({
    product: { category, title, price, picture, id, free_shipping }
}) => (
    <>
        <Link to={`/items/${id}`} className="product">
            <img src={picture} alt={title} className="icon" />
            <div className="info">
                <Price price={price} />
                {free_shipping && <span className="new">●</span>}
                <span className="title">{title}</span>
            </div>
            <span className="category">{category}</span>
        </Link>
    </>
);

export default ProductListItem;
