import React from "react";

import { getFormatedNumber } from "../../utils/number";

const Price = ({ price: { currency, amount, decimals }, showDecimals }) => (
    <span className="Price__section">
        {currency} {getFormatedNumber(amount)}
        {showDecimals && <span className="decimals">{decimals}</span>}
    </span>
);

export default Price;
