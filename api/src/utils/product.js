import { getCategory } from "./categories";
import { getPrice, getCurrency } from "./price";

export async function getProduct(item) {
    const {
        id,
        title,
        thumbnail,
        category_id,
        currency_id,
        price
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
        category
    };
}
