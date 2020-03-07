import React from "react";
import { Helmet } from "react-helmet-async";

import { getEnv } from "../../utils/env";

const MetaTags = ({ title, metas }) => (
    <Helmet>
        {title && (
            <title>
                {title} en {getEnv("APP_NAME")}
            </title>
        )}
        {metas.map((meta, index) => (
            <meta name={meta.name} content={meta.content} key={index} />
        ))}
    </Helmet>
);

export default MetaTags;
