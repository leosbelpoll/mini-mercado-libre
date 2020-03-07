import React from "react";

const EmptyList = () => (
    <section className="EmptyList__section">
        <div class="icon">
            <img src="/images/glass.svg" alt="Search icon" />
        </div>
        <div class="info">
            <h3 class="header__title">
                No hay elementos que coincidan con tu búsqueda.
            </h3>
            <ul class="links__list">
                <li>Revisa la ortografía de la palabra.</li>
                <li>Utiliza palabras más genéricas o menos palabras.</li>
            </ul>
        </div>
    </section>
);

export default EmptyList;
