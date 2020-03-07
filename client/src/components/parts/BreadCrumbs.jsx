import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ breadCrumbs }) =>
    !!breadCrumbs.length && (
        <section className="BreadCrumbs__section container">
            {breadCrumbs.map((breadCrumb, index) => (
                <Link
                    className="item"
                    to={`/items?q=${breadCrumb}`}
                    key={index}
                >
                    {breadCrumb}
                </Link>
            ))}
        </section>
    );

export default BreadCrumbs;
