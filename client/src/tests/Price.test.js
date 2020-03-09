import React from "react";
import { mount, shallow } from "enzyme";
import Price from "../components/parts/Price";
import { getFormatedNumber } from "../utils/number";

const priceProps = {
    currency: "$",
    amount: "100000",
    decimals: "87"
};
const priceWithoutDecimals = <Price price={priceProps} />;
const priceWithDecimals = <Price price={priceProps} showDecimals />;

describe("Price in List", () => {
    it("Check mount compoment", () => {
        const wrapper = mount(priceWithoutDecimals);
        expect(wrapper).toMatchSnapshot();
    });

    it("Case: Check Price in list", () => {
        const wrapper = shallow(priceWithoutDecimals);

        expect(wrapper.find("span.Price__section").text()).toEqual(
            `${priceProps.currency} ${getFormatedNumber(priceProps.amount)}`
        );
        expect(wrapper.exists("span.decimals")).toBeFalsy();
    });
});

describe("Price in Detail product", () => {
    it("Case: Check Price", () => {
        const wrapper = shallow(priceWithDecimals);

        expect(wrapper.find("span.Price__section").text()).toEqual(
            `${priceProps.currency} ${getFormatedNumber(priceProps.amount)}${
                priceProps.decimals
            }`
        );
        expect(wrapper.find("span.decimals").text()).toEqual(
            `${priceProps.decimals}`
        );
    });
});
