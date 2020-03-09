import React from "react";
import { shallow } from "enzyme";
import useApi from "../hooks/useApi";
import ProductList from "../components/products/ProductList";

jest.mock("../hooks/useApi");

const location = {
    search: "?q=criteria"
};

const response = {
    value: {
        author: {
            name: "Leosbel",
            lastname: "Poll"
        },
        categories: ["Celulares y Teléfonos", "Celulares y Smartphones"],
        items: [
            {
                id: "MLA840578654",
                title: "Asus Rog Phone Zs600kl Dual Sim 512 Gb Negro 8 Gb Ram",
                price: {
                    currency: "$",
                    amount: "64000",
                    decimals: "00"
                },
                picture:
                    "http://mla-s1-p.mlstatic.com/953810-MLA40670251535_022020-I.jpg",
                category: "Celulares y Smartphones",
                condition: "Nuevo",
                free_shipping: true
            },
            {
                id: "MLA839615144",
                title:
                    "Asus Rog Phone Ii Zs660kl Dual Sim 1 Tb Negro Mate 12 Gb Ram",
                price: {
                    currency: "$",
                    amount: "154900",
                    decimals: "00"
                },
                picture:
                    "http://mla-s1-p.mlstatic.com/897048-MLA40670257332_022020-I.jpg",
                category: "Celulares y Smartphones",
                condition: "Nuevo",
                free_shipping: true
            },
            {
                id: "MLA843240537",
                title: "Apple iPhone 8 Plus 64 Gb Gris Espacial 3 Gb Ram",
                price: {
                    currency: "$",
                    amount: "69989",
                    decimals: "99"
                },
                picture:
                    "http://mla-s2-p.mlstatic.com/662389-MLA31003000984_062019-I.jpg",
                category: "Celulares y Smartphones",
                condition: "Nuevo",
                free_shipping: true
            },
            {
                id: "MLA830917903",
                title: "Apple iPhone Xs Max Dual Sim 64 Gb Plata 4 Gb Ram",
                price: {
                    currency: "$",
                    amount: "120000",
                    decimals: "00"
                },
                picture:
                    "http://mla-s2-p.mlstatic.com/806643-MLA31002298953_062019-I.jpg",
                category: "Celulares y Smartphones",
                condition: "Nuevo",
                free_shipping: true
            }
        ]
    },
    error: null,
    loading: false
};

const emptyResponse = {
    value: {
        author: {
            name: "Leosbel",
            lastname: "Poll"
        },
        categories: ["Celulares y Teléfonos", "Celulares y Smartphones"],
        items: []
    },
    error: null,
    loading: false
};

describe("ProductList", () => {
    it("Case: Success", () => {
        useApi.mockImplementationOnce(() => response);
        const wrapper = shallow(<ProductList location={location} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toBeTruthy();
        expect(wrapper.exists("Error")).toBeFalsy();
        expect(wrapper.exists("Loading")).toBeFalsy();
        expect(wrapper.exists("BreadCrumbs")).toBeTruthy();
        expect(wrapper.find("BreadCrumbs").get(0).props.breadCrumbs).toEqual(
            response.value.categories
        );
        expect(wrapper.find("ProductListItem").length).toEqual(
            response.value.items.length
        );
        response.value.items.forEach((element, index) => {
            expect(wrapper.find("ProductListItem").get(index).key).toEqual(
                element.id
            );
            expect(
                wrapper.find("ProductListItem").get(index).props.product
            ).toEqual(element);
        });
    });
    it("Case: EmptyList", () => {
        useApi.mockImplementationOnce(() => emptyResponse);
        const wrapper = shallow(<ProductList location={location} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toBeTruthy();
        expect(wrapper.exists("Error")).toBeFalsy();
        expect(wrapper.exists("Loading")).toBeFalsy();
        expect(wrapper.exists("BreadCrumbs")).toBeTruthy();
        expect(wrapper.exists("EmptyList")).toBeTruthy();
        expect(wrapper.find("ProductListItem").length).toEqual(0);
    });

    it("Case: Loading", () => {
        useApi.mockImplementationOnce(() => {
            return {
                value: null,
                error: null,
                loading: true
            };
        });
        const wrapper = shallow(<ProductList location={location} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toBeTruthy();
        expect(wrapper.exists("Error")).toBeFalsy();
        expect(wrapper.exists("Loading")).toBeTruthy();
        expect(wrapper.exists("BreadCrumbs")).toBeFalsy();
        expect(wrapper.exists("EmptyList")).toBeFalsy();
        expect(wrapper.exists("ProductListItem")).toBeFalsy();
    });

    it("Case: Error", () => {
        useApi.mockImplementationOnce(() => {
            return {
                value: null,
                error: { status: 404, message: "Error" },
                loading: false
            };
        });
        const wrapper = shallow(<ProductList location={location} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toBeTruthy();
        expect(wrapper.exists("Error")).toBeTruthy();
        expect(wrapper.exists("Loading")).toBeFalsy();
        expect(wrapper.exists("BreadCrumbs")).toBeFalsy();
        expect(wrapper.exists("EmptyList")).toBeFalsy();
        expect(wrapper.exists("ProductListItem")).toBeFalsy();
    });
});
