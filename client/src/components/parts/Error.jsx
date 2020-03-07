import React from "react";
import { Link } from "react-router-dom";

import MetaTags from "./MetaTags";

const Error = ({ status, message }) => (
    <>
        <MetaTags
            title="Oops Parece algo ha salido mal"
            metas={[{ name: "description", content: message }]}
        />
        <section className="Error__section">
            <img src="/images/error.svg" alt="Icono de error" />
            <p className="message">
                {status === 404
                    ? "Parece que este recurso no existe"
                    : "Parece que algo ha salido mal"}
            </p>
            <Link to="/" className="link">
                Ir a la Página Principal
            </Link>
        </section>
    </>
);

export default Error;
