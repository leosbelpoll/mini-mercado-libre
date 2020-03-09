import { getCapitalized } from "../utils/text";

describe("Text", () => {
    it("Case: Test capitalize", () => {
        let texto = getCapitalized("test");
        expect(texto).toEqual("Test");
        expect(texto !== "test").toBeTruthy();
        expect(texto !== "TEST").toBeTruthy();
    });
});
