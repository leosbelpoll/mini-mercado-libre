import React from "react";
import { shallow } from "enzyme";
import ProductDetail from "../components/products/ProductDetail";
import useApi from "../hooks/useApi";

jest.mock("../hooks/useApi");

jest.mock("react-router", () => {
    return {
        useParams: () => ({
            id: "123"
        })
    };
});

const product = {
    value: {
        author: {
            name: "Leosbel",
            lastname: "Poll"
        },
        item: {
            id: "MLA838624544",
            title: "Apple iPhone Xr Dual Sim 128 Gb Negro 3 Gb Ram",
            price: {
                currency: "$",
                amount: "87000",
                decimals: "00"
            },
            picture:
                "http://mla-s1-p.mlstatic.com/637450-MLA31002678143_062019-I.jpg",
            category: "Celulares y Smartphones",
            condition: "Nuevo",
            free_shipping: true,
            description: "Nueva pantalla y diseño compacto.\nEl nuevo iPhone",
            sold_quantity: 0
        }
    },
    error: null,
    loading: false
};

describe("Component success", () => {
    useApi.mockImplementationOnce(() => product);

    it("Case: Verify component elements", () => {
        const wrapper = shallow(<ProductDetail />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toBeTruthy();
        expect(wrapper.exists("Error")).toBeFalsy();
        expect(wrapper.exists("Loading")).toBeFalsy();
        expect(wrapper.exists("BreadCrumbs")).toBeTruthy();

        const item = product.value.item;
        expect(wrapper.find("img.icon").prop("src")).toEqual(item.picture);
        expect(wrapper.find("img.icon").prop("alt")).toEqual(item.title);
        expect(wrapper.find(".title").text()).toEqual(item.title);
        expect(wrapper.find("p.description-text").text()).toEqual(
            item.description
        );
        expect(wrapper.find("span.sell").text()).toEqual(
            `${item.condition} - ${item.sold_quantity} vendidos`
        );
        expect(wrapper.find("button.buy").text()).toEqual("Comprar");
        expect(wrapper.exists("Price")).toBeTruthy();
        expect(wrapper.exists("MetaTags")).toBeTruthy();
    });
});

describe("Component is loading", () => {
    useApi.mockImplementationOnce(() => {
        return {
            value: null,
            error: null,
            loading: true
        };
    });

    it("Case: Verify component elements", () => {
        const wrapper = shallow(<ProductDetail />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toBeTruthy();
        expect(wrapper.exists("Error")).toBeFalsy();
        expect(wrapper.exists("Loading")).toBeTruthy();
    });
});

describe("Component error", () => {
    useApi.mockImplementationOnce(() => {
        return {
            value: null,
            error: { status: 404, message: "Error" },
            loading: false
        };
    });

    it("Case: Verify component elements", () => {
        const wrapper = shallow(<ProductDetail />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper).toBeTruthy();
        expect(wrapper.exists("Loading")).toBeFalsy();
        expect(wrapper.exists("BreadCrumbs")).toBeFalsy();
        expect(
            wrapper.exists("section.ProductDetail__section container")
        ).toBeFalsy();
        expect(wrapper.exists("Error")).toBeTruthy();
    });
});
