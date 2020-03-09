import { getCategory } from "./categories";
import { getPrice, getCurrency } from "./price";
import { getCondition } from "./condition";

export async function getProduct(item) {
    const {
        id,
        title,
        thumbnail,
        condition,
        category_id,
        currency_id,
        price,
        shipping: { free_shipping },
    } = item;
    const currency = await getCurrency(currency_id);
    const category = await getCategory(category_id);

    const { amount, decimals } = getPrice(
        price,
        currency.decimal_places,
    );

    return {
        id,
        title,
        price: {
            currency: currency.symbol,
            amount,
            decimals,
        },
        picture: thumbnail,
        category,
        condition: getCondition(condition),
        free_shipping,
    };
}
