import { getPrice } from "../utils/price";

describe("Test price.js util", () => {
    it("Case: Number with decimals", () => {
        const price = getPrice(99.87, 2);

        expect({
            amount: "99",
            decimals: "87",
        }).toEqual(price);
    });

    it("Case: Number without decimals", () => {
        const price = getPrice(99, 3);

        expect({
            amount: "99",
            decimals: "000",
        }).toEqual(price);
    });

    it("Case: Not valid number", () => {
        expect(getPrice).toThrow(Error);
    });
});
