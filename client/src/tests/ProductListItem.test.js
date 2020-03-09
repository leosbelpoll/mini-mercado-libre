import React from "react";
import { shallow } from "enzyme";
import ProductListItem from "../components/products/ProductListItem";
import Price from "../components/parts/Price";

const productItem = {
    id: "MLA838624544",
    title: "Apple iPhone Xr Dual Sim 128 Gb Negro 3 Gb Ram",
    price: {
        currency: "$",
        amount: "87000",
        decimals: "00"
    },
    picture: "http://mla-s1-p.mlstatic.com/637450-MLA31002678143_062019-I.jpg",
    category: "Celulares y Smartphones",
    condition: "Nuevo",
    free_shipping: true,
    description:
        "Nueva pantalla y diseño compacto.\nEl nuevo iPhone XR le da la bienvenida",
    sold_quantity: 0
};

const productItemOld = {
    id: "MLA838624544",
    title: "Apple iPhone Xr Dual Sim 128 Gb Negro 3 Gb Ram",
    price: {
        currency: "$",
        amount: "87000",
        decimals: "00"
    },
    picture: "http://mla-s1-p.mlstatic.com/637450-MLA31002678143_062019-I.jpg",
    category: "Celulares y Smartphones",
    condition: "Nuevo",
    free_shipping: false,
    description:
        "Nueva pantalla y diseño compacto.\nEl nuevo iPhone XR le da la bienvenida",
    sold_quantity: 0
};

describe("ProductListItem", () => {
    it("Case: Free shipping", () => {
        const wrapper = shallow(<ProductListItem product={productItem} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toBeTruthy();
        expect(wrapper.find(Price).length).toEqual(1);
        expect(wrapper.exists("span.new")).toBeTruthy();
        expect(wrapper.find("span.title").text()).toEqual(productItem.title);
        expect(wrapper.find("span.category").text()).toEqual(
            productItem.category
        );
        expect(wrapper.find("Link").props().to).toEqual(
            `/items/${productItem.id}`
        );
        expect(wrapper.find("img.icon").prop("src")).toEqual(
            productItem.picture
        );
    });

    it("Case: Not free shipping", () => {
        const wrapper = shallow(<ProductListItem product={productItemOld} />);
        expect(wrapper.find(Price).length).toEqual(1);
        expect(wrapper.exists("span.new")).toBeFalsy();
        expect(wrapper.find("span.title").text()).toEqual(productItem.title);
        expect(wrapper.find("span.category").text()).toEqual(
            productItem.category
        );
        expect(wrapper.find("Link").props().to).toEqual(
            `/items/${productItem.id}`
        );
        expect(wrapper.find("img.icon").prop("src")).toEqual(
            productItem.picture
        );
    });
});
