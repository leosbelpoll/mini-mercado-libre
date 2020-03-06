import React from "react";
import { Link } from "react-router-dom";

const Error = () => (
    <div className="container">
        <h1>Error :(</h1>
        <Link to="/">Go home</Link>
    </div>
);

export default Error;
