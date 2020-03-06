import React from "react";
import { Link, useHistory } from "react-router-dom";

import useInput from "../../hooks/useInput";

const Header = () => {
    const { value, bind } = useInput("");
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/items?q=${value}`);
    };

    return (
        <header className="Header__section">
            <div className="container">
                <form onSubmit={handleSubmit} className="form">
                    <Link to="/">
                        <img
                            src="/favicon.ico"
                            className="img"
                            alt="Mini Mercado Libre logo"
                        />
                    </Link>
                    <input
                        type="text"
                        placeholder="Nunca dejes de buscar"
                        className="input"
                        {...bind}
                    />
                    <button className="button">
                        <img src="/images/iconglass.svg" alt="Glass icon" />
                    </button>
                </form>
            </div>
        </header>
    );
};

export default Header;
