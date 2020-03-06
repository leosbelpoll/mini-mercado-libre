import React from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
    const { id } = useParams();

    return (
        <div className="container">
            <h1>Details - Product {id}</h1>
        </div>
    );
};

export default ProductDetail;
