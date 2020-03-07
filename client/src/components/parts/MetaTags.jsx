import React from "react";
import { Helmet } from "react-helmet-async";

const MetaTags = ({ title, metas }) => (
    <Helmet>
        {title && (
            <title>
                {title} en {process.env.REACT_APP_NAME || "Mini Mercado Libre"}
            </title>
        )}
        {metas.map((meta, index) => (
            <meta name={meta.name} content={meta.content} key={index} />
        ))}
    </Helmet>
);

export default MetaTags;
