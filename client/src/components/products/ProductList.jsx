import React from "react";

const ProductList = props => {
    function useQuery() {
        return new URLSearchParams(props.location.search);
    }
    const query = useQuery();
    const q = query.get("q");

    return (
        <div className="container">
            <h1>Product List {q}</h1>
        </div>
    );
};

export default ProductList;
