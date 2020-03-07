import React from "react";
import { Link } from "react-router-dom";

const Error = ({ status }) => (
    <section className="Error__section">
        <img src="/images/error.svg" alt="Icono de error" />
        <p className="message">
            {status === 404
                ? "Parece que esta página no existe"
                : "Parece que algo ha salido mal"}
        </p>
        <Link to="/" className="link">
            Ir a la Página Principal
        </Link>
    </section>
);

export default Error;
