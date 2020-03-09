import { getCondition } from "../utils/condition";

describe("Test condition.js util", () => {
    it("New case", () => {
        expect(getCondition("new")).toEqual("Nuevo");
    });

    it("Used case", () => {
        expect(getCondition("used")).toEqual("Usado");
    });
    it("Not specified case", () => {
        expect(getCondition("not_specified")).toEqual(
            "No especificado",
        );
    });
});
