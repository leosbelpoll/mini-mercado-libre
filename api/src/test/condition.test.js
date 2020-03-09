import { getCondition } from "../utils/condition";

describe("Test condition.js util", () => {
    it("Case: New", () => {
        expect(getCondition("new")).toEqual("Nuevo");
    });

    it("Case: Used", () => {
        expect(getCondition("used")).toEqual("Usado");
    });
    it("Case: Not specified", () => {
        expect(getCondition("not_specified")).toEqual(
            "No especificado",
        );
    });
});
