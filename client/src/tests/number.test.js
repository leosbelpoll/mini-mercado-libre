import { getFormatedNumber } from "../utils/number";

describe("Number", () => {
    it("Case: Test format number", () => {
        let price = getFormatedNumber(100000000);
        // FIXME: Right now node env is always separating by ","
        expect(price).toEqual('100,000,000')
        price = getFormatedNumber(10);
        expect(price).toEqual('10')
    });
});
