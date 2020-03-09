import React from "react";
import { mount } from "enzyme";
import Header from "../components/parts/Header";
import App from "../App";
import { Link } from "react-router-dom";

describe("Header", () => {
    it("Case: Verify component elements", () => {
        const wrapper = mount(
            <App>
                <Header />
            </App>
        );
        expect(wrapper).toMatchSnapshot();
        const link = wrapper.find(Link);
        expect(link.length).toEqual(1);
        expect(link.props().to).toEqual("/");
        expect(wrapper.find("img.img").prop("src")).toEqual("/favicon.ico");
        expect(wrapper.find("img.img").prop("alt")).toEqual(
            "Mini Mercado Libre logo"
        );
        expect(wrapper.exists("input.input")).toBeTruthy();
    });
});
